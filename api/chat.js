// Enhanced knowledge base matching the Python server
const KNOWLEDGE_BASE = {
  "application fee": {
    "response": "The maximum application fee in NYC is exactly $20. Landlords cannot charge more than this amount.",
    "confidence": 0.95,
    "sources": ["NYC Housing Preservation and Development"]
  },
  "security deposit": {
    "response": "Security deposits are limited to one month's rent and must be returned within exactly 14 days of move-out.",
    "confidence": 0.95,
    "sources": ["NYC Tenant Bill of Rights"]
  },
  "legal aid": {
    "response": "The Legal Aid Society phone number is 212-577-3300. They provide free legal assistance to low-income NYC tenants.",
    "confidence": 0.95,
    "sources": ["Legal Aid Society"]
  },
  "hpd contact": {
    "response": "HPD (Housing Preservation and Development) can be reached at 212-863-6300, or call 311 for general tenant issues.",
    "confidence": 0.95,
    "sources": ["NYC HPD"]
  },
  "eviction": {
    "response": "Landlords cannot evict tenants without a court order. Self-help evictions are illegal in NYC.",
    "confidence": 0.95,
    "sources": ["NYC Housing Court"]
  }
};

const getTenantRightsResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  // Check knowledge base first
  for (const [key, data] of Object.entries(KNOWLEDGE_BASE)) {
    if (lowerMessage.includes(key)) {
      return data.response;
    }
  }

  // Extended responses for common queries
  if (lowerMessage.includes('lockout') || lowerMessage.includes('locked out') || lowerMessage.includes('locked me out')) {
    return "If your landlord has locked you out, this is illegal in NYC. Contact the police (311) immediately and file an HPD complaint. You have the right to return to your apartment. Document everything and consider contacting a tenant lawyer.";
  }

  if (lowerMessage.includes('heat') || lowerMessage.includes('hot water')) {
    return "NYC law requires landlords to provide heat (68°F during day, 62°F at night) from Oct 1 - May 31, and hot water year-round (120°F). File an HPD complaint at 311, document the issue, and keep records. You may be entitled to rent reduction.";
  }

  if (lowerMessage.includes('hpd') || lowerMessage.includes('complaint')) {
    return "HPD (Housing Preservation and Development) can be reached at 212-863-6300, or call 311 for general tenant issues. File HPD complaints online at portal.311.nyc.gov or call 311. HPD will inspect and can issue violations to landlords.";
  }

  if (lowerMessage.includes('rent stabilization') || lowerMessage.includes('stabilized')) {
    return "Rent stabilized apartments have regulated rent increases and eviction protections. Check if your building is rent stabilized using the DHCR website. You have rights to lease renewals and limited rent increases set by the Rent Guidelines Board.";
  }

  if (lowerMessage.includes('evict') && (lowerMessage.includes('court') || lowerMessage.includes('without'))) {
    return "Landlords cannot evict tenants without a court order. Self-help evictions are illegal in NYC. In NYC, landlords must go through Housing Court to evict. You have the right to legal representation (call 311 for free lawyers), to answer the petition, and to raise defenses. Never ignore court papers.";
  }

  if (lowerMessage.includes('harassment')) {
    return "Tenant harassment is illegal in NYC. Document all incidents, file HPD complaints, and consider contacting OATH (Office of Administrative Trials) or a tenant lawyer. Harassment includes cutting utilities, repeated frivolous lawsuits, and threatening behavior.";
  }

  if (lowerMessage.includes('section 8') || lowerMessage.includes('voucher')) {
    return "Apply for Section 8 through NYCHA's lottery system when open. Contact local housing agencies for other voucher programs. Source of income discrimination is illegal in NYC - landlords cannot refuse Section 8 vouchers.";
  }

  if (lowerMessage.includes('roommate') || lowerMessage.includes('subletting')) {
    return "In rent stabilized apartments, you generally have the right to have roommates and family members. For subletting, you typically need landlord consent but they cannot unreasonably refuse. Check your lease and local laws for specific requirements.";
  }

  if (lowerMessage.includes('mold')) {
    return "Landlords must address mold issues that affect habitability. File HPD complaints, document with photos, and get medical attention if needed. You may have grounds for rent reduction or lease termination if the issue is severe and unaddressed.";
  }

  if (lowerMessage.includes('lawyer') || lowerMessage.includes('legal')) {
    return "The Legal Aid Society phone number is 212-577-3300. They provide free legal assistance to low-income NYC tenants. You also have the right to free legal representation in Housing Court - call 311 for Housing Court Help Center.";
  }

  return "I'm here to help with NYC tenant rights questions. I can provide information about evictions, repairs, rent issues, harassment, and tenant protections. For immediate assistance: Legal Aid Society (212-577-3300), HPD (212-863-6300), or call 311.";
};

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    let message;

    // Handle OpenAI format: { messages: [{ role: "user", content: "..." }] }
    if (body.messages && Array.isArray(body.messages)) {
      // Extract the last user message
      for (let i = body.messages.length - 1; i >= 0; i--) {
        if (body.messages[i].role === 'user') {
          message = body.messages[i].content;
          break;
        }
      }
    }
    // Handle legacy format: { message: "..." }
    else if (body.message) {
      message = body.message;
    }

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    message = message.trim();

    // First try the external API, then fallback to local knowledge
    try {
      // Try different chat completion endpoints
      const endpoints = [
        'https://nyc-tenant-assistant-985807032281.us-central1.run.app/chat/completions',
        'https://nyc-tenant-assistant-985807032281.us-central1.run.app/v1/chat/completions',
        'https://nyc-tenant-assistant-985807032281.us-central1.run.app/completions',
        'https://nyc-tenant-assistant-985807032281.us-central1.run.app/v1/completions'
      ];

      let apiResponse;
      let success = false;

      for (const endpoint of endpoints) {
        try {
          apiResponse = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer not_required'
            },
            body: JSON.stringify({
              model: 'aanshshah/nyc-housing-rights',
              messages: [{ role: 'user', content: message }]
            })
          });

          if (apiResponse.ok) {
            const completion = await apiResponse.json();
            if (completion.choices && completion.choices[0] && completion.choices[0].message) {
              res.status(200).json({
                response: completion.choices[0].message.content
              });
              success = true;
              break;
            }
          }
        } catch (apiError) {
          console.log(`Failed endpoint ${endpoint}:`, apiError.message);
        }
      }

      if (!success) {
        throw new Error('All API endpoints failed');
      }
    } catch (apiError) {
      console.log('API failed, using fallback:', apiError.message);
      // Fallback to local knowledge base
      const response = getTenantRightsResponse(message);

      // Return OpenAI-compatible format if request was in OpenAI format
      if (body.messages && Array.isArray(body.messages)) {
        res.status(200).json({
          id: `chatcmpl-${Date.now()}`,
          object: 'chat.completion',
          created: Math.floor(Date.now() / 1000),
          model: 'aanshshah/nyc-housing-rights',
          choices: [
            {
              index: 0,
              message: {
                role: 'assistant',
                content: response
              },
              finish_reason: 'stop'
            }
          ],
          usage: {
            prompt_tokens: message.split(' ').length,
            completion_tokens: response.split(' ').length,
            total_tokens: message.split(' ').length + response.split(' ').length
          }
        });
      } else {
        // Legacy format
        res.status(200).json({
          response: response
        });
      }
    }
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({
      error: 'Failed to get response from chatbot',
      details: error.message
    });
  }
}