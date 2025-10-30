// Comprehensive NYC Tenant Rights Knowledge Base

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // 1. Illegal Lockouts & Harassment
  {
    keywords: ['lockout', 'locked out', 'changed lock', 'change lock', 'locks'],
    category: 'Illegal Lockouts',
    response: `## 🚨 ILLEGAL LOCKOUT - IMMEDIATE ACTION REQUIRED

Your landlord **CANNOT** change locks or lock you out without a court order. This is an illegal "self-help" eviction.

### WHAT TO DO RIGHT NOW:
1. **Call 911** - This is illegal and police can help you get back in
2. **Document everything:** photos, witnesses, texts from landlord
3. **Contact Legal Aid Society:** [(212) 577-3300](tel:212-577-3300)
4. File emergency court petition to regain entry

### YOUR RIGHTS:
- Even if you owe rent, lockouts are **ILLEGAL**
- Landlord must go through housing court (takes months)
- You can sue for illegal lockout damages ($1,000+)
- Landlord may face criminal charges

You can also file a harassment complaint with HPD by calling **311**.`
  },
  {
    keywords: ['harassment', 'harass', 'intimidat', 'threaten', 'threat'],
    category: 'Landlord Harassment',
    response: `## ⚠️ LANDLORD HARASSMENT IS ILLEGAL IN NYC

NYC law specifically prohibits landlord harassment under Admin Code §27-2004 and §27-2005.

### ILLEGAL HARASSMENT INCLUDES:
- Repeatedly demanding you move when you have right to stay
- Making false statements to force you out
- Refusing to make repairs to make apartment unlivable
- Unreasonable lease renewal refusal
- Unnecessary construction/noise to disturb you
- Threatening to report immigration status
- Entering apartment without 24-hour notice (except emergencies)
- Cutting off essential services (heat, water, gas, electric)
- Removing your belongings
- Verbal threats or physical intimidation

WHAT TO DO:
1. Document EVERYTHING: dates, times, witnesses, photos, recordings
2. Send written complaints to landlord (keep copies)
3. File harassment complaint with HPD: Call 311
4. Contact Office of Tenant Advocate: (311)
5. Get free legal help: Legal Aid (212) 577-3300

YOU CAN SUE FOR:
• Harassment in housing court
• Civil penalties up to $10,000+ per violation
• Attorney's fees
• Damages for emotional distress

Harassment complaints can also help you defend against eviction.`
  },
  {
    keywords: ['retaliat', 'revenge', 'complained', 'complaint', 'report'],
    category: 'Retaliation',
    response: `🛡️ PROTECTION FROM RETALIATION

NYC law protects you from landlord retaliation for:
• Filing complaints with HPD, DHCR, or other agencies
• Reporting code violations
• Requesting repairs
• Joining/forming tenant association
• Testifying in housing court
• Reporting illegal rent increases

ILLEGAL RETALIATION INCLUDES:
• Starting eviction within 6 months of protected activity
• Raising rent unusually
• Reducing services
• Refusing to renew lease
• Harassment or intimidation

YOUR RIGHTS:
• Retaliation is a valid legal defense to eviction
• You can sue landlord for retaliatory actions
• Court can award damages and attorney fees
• 6-month presumption: if eviction filed within 6 months of complaint, it's presumed retaliation

HOW TO PROTECT YOURSELF:
1. Keep records of all complaints filed
2. Document timeline of events
3. Save all communications with landlord
4. Get legal representation immediately

If facing retaliation, contact Legal Aid: (212) 577-3300`
  },

  // 2. Repairs & Living Conditions
  {
    keywords: ['heat', 'hot water', 'cold', 'heating', 'temperature'],
    category: 'Heat & Hot Water',
    response: `🔥 NYC HEAT & HOT WATER REQUIREMENTS

NYC has strict laws about heat and hot water - violations are serious!

HEAT REQUIREMENTS (Oct 1 - May 31):
• DAY (6 AM - 10 PM): Must be at least 68°F when outside temp is below 55°F
• NIGHT (10 PM - 6 AM): Must be at least 62°F
• These are MANDATORY - not negotiable

HOT WATER REQUIREMENTS (Year-round):
• Must be at least 120°F at the tap
• Must be available 24/7, 365 days a year

NO HEAT/HOT WATER? IMMEDIATE STEPS:
1. Call 311 to file emergency HPD complaint
2. Document dates/times and temperatures if possible
3. Contact landlord in writing (save proof)
4. For emergencies: HPD will issue violations within 24 hours
5. Get free legal help: (212) 577-3300

YOUR RIGHTS:
• You can withhold rent if no heat/hot water (with court approval)
• You may be able to get rent abatement (refund)
• HPD can do emergency repairs and bill landlord
• Violations can help defend against eviction

WINTER EMERGENCY:
If no heat in winter, this is a Class C "immediately hazardous" violation. Call 311 immediately - inspectors must come within 24 hours.

You can also sue landlord for damages/discomfort in housing court.`
  },
  {
    keywords: ['gas', 'electric', 'electricity', 'power', 'utility', 'utilities', 'shut off', 'shutoff'],
    category: 'Utilities',
    response: `⚡ UTILITY SHUTOFFS ARE ILLEGAL

Your landlord CANNOT shut off gas, electricity, water, or heat to force you out or punish you. This is illegal harassment and self-help eviction.

WHAT TO DO IMMEDIATELY:
1. Call 911 - This is a crime
2. Call 311 to file HPD emergency complaint
3. Document: photos, dates, witnesses
4. Contact Legal Aid: (212) 577-3300
5. File emergency court order to restore services

YOUR RIGHTS:
• Utility shutoffs are illegal harassment under NYC law
• You can get immediate court order to restore service
• You can sue for damages ($1,000+ per day)
• Landlord may face criminal charges
• This is strong defense against eviction

GAS OUTAGES:
If gas is shut off for repairs/safety:
• Landlord must provide alternative cooking method
• You may be entitled to rent reduction
• Landlord must restore gas as quickly as possible
• If delay is unreasonable, you can sue

ELECTRIC OUTAGES:
• Must be restored immediately
• If due to landlord's failure to maintain building, you can get rent abatement
• Document all outages with dates/times

Con Edison customers: If utilities shut off for non-payment, you may have rights as tenant. Call: 1-800-75-CONED

DO NOT let landlord claim you are responsible for utility payments unless clearly stated in your lease.`
  },
  {
    keywords: ['pest', 'rat', 'mouse', 'mice', 'roach', 'cockroach', 'bedbug', 'bed bug', 'infestation'],
    category: 'Pest Infestations',
    response: `🐛 PEST INFESTATIONS - YOUR RIGHTS

Landlords MUST keep buildings free of pests. Infestations violate NYC Housing Maintenance Code.

LANDLORD'S RESPONSIBILITIES:
• Exterminate rats, mice, roaches, bedbugs
• Seal entry points and holes
• Maintain clean common areas
• Provide regular extermination service
• Pay for all extermination costs

BEDBUGS - SPECIAL RULES:
• Landlord must investigate within 7 days of report
• Must exterminate at landlord's expense
• Landlord must inspect adjoining apartments
• You may need to prepare apartment (clear clutter, wash linens)
• Landlord cannot charge you for bedbug treatment
• Landlord cannot evict you for having bedbugs

RATS & MICE:
• Class B violation - must be corrected within 30 days
• In multiple dwellings, landlord must provide extermination
• Landlord must seal holes and entry points

ROACHES:
• Landlord responsible for extermination
• Must treat whole building, not just one unit
• Regular preventive treatment required

WHAT TO DO:
1. Report to landlord in writing (keep copies)
2. Take photos/videos of infestation
3. Call 311 to file HPD complaint
4. If landlord doesn't act within 30 days, file HP action in housing court
5. You may be entitled to rent reduction

You can also:
• Withhold rent (with court order)
• Sue for damages
• Break lease if uninhabitable
• Use violations to defend against eviction

Contact Legal Aid for help: (212) 577-3300`
  },
  {
    keywords: ['mold', 'leak', 'water damage', 'ceiling', 'wall', 'structural'],
    category: 'Mold & Structural Issues',
    response: `🏚️ MOLD, LEAKS & STRUCTURAL PROBLEMS

Mold and water damage are serious health hazards. Landlords MUST repair these issues.

MOLD:
• Can cause serious health problems (asthma, allergies, respiratory issues)
• Landlord must identify and fix source of moisture
• Must properly remediate mold (not just paint over it)
• You have right to mold inspection
• If mold covers >10 sq ft, landlord must hire licensed mold remediator

WATER LEAKS:
• Landlord must fix leaks from roof, pipes, windows
• Emergency repairs required for major leaks
• Must repair within reasonable time (usually 30 days for non-emergency)
• Chronic leaks = harassment

STRUCTURAL ISSUES:
• Cracked walls, ceilings, floors must be repaired
• Landlord must maintain structural integrity
• Broken stairs, railings are emergency hazards

WHAT TO DO:
1. Report in writing immediately
2. Take photos/videos with dates
3. Keep record of health problems
4. Call 311 for HPD inspection
5. For emergency structural issues: Call 311 immediately

YOUR RIGHTS:
• Can get emergency repairs done and deduct from rent (with court approval)
• May be entitled to rent abatement
• Can break lease if uninhabitable
• Can sue for health damages
• Use violations to defend eviction

HEALTH HAZARDS:
If mold/leaks cause health problems:
• See doctor and get documentation
• May be able to sue for medical expenses
• Could be grounds to break lease

For severe cases: Contact NYC Department of Health: (311)
Legal help: Legal Aid (212) 577-3300`
  },
  {
    keywords: ['lead', 'lead paint', 'paint', 'children', 'child', 'baby'],
    category: 'Lead Paint',
    response: `☠️ LEAD PAINT HAZARDS - CRITICAL PROTECTION

Lead paint is extremely dangerous, especially for children under 6. NYC has strict lead paint laws.

IF CHILD UNDER 6 LIVES IN APARTMENT:
• Landlord MUST inspect for lead paint annually
• Must remediate (remove/cover) all lead hazards
• Peeling paint in apartments built before 1960 is presumed to contain lead
• Landlord must provide "window guards" if child under 11

LOCAL LAW 1 (LL1) REQUIREMENTS:
• Buildings built before 1960 with child under 6: landlord must do annual inspection
• Must remediate all peeling paint and lead hazards
• Landlord must file annual certification with HPD
• Violations for non-compliance

YOUR RIGHTS:
• Free lead paint inspections from HPD: Call 311
• Landlord must fix lead hazards within strict timeframes
• Can get "free lead test" for children from DOH
• If child has elevated lead levels, landlord faces serious penalties

WHAT TO DO IF LEAD DETECTED:
1. Get child tested immediately (call pediatrician)
2. Call 311 to file HPD complaint
3. Request immediate lead inspection
4. Document all peeling/chipping paint
5. Keep children away from affected areas
6. Get legal help: (212) 577-3300

LANDLORD MUST:
• Fix lead hazards within 10-21 days depending on severity
• Use certified lead abatement contractors
• Provide safe housing during remediation if necessary
• Pay for medical monitoring if child exposed

You can sue for:
• Medical expenses
• Pain and suffering
• Temporary relocation costs
• Rent abatement

Lead poisoning cases are VERY serious. Get immediate legal help.
NYC Lead Poisoning Prevention: 311 or visit nyc.gov/health`
  },

  // 3. Rent & Lease Issues
  {
    keywords: ['rent stabilized', 'stabilization', 'rent control', 'overcharge', 'illegal rent'],
    category: 'Rent Stabilization',
    response: `📊 RENT STABILIZATION RIGHTS

Rent-stabilized tenants have POWERFUL protections in NYC!

HOW TO KNOW IF YOU'RE RENT STABILIZED:
• Building built before 1974
• Building has 6+ units
• Your rent is below certain thresholds
• Check your lease - should say "rent stabilized"
• Request rent history from DHCR

RENT STABILIZATION PROTECTIONS:
✅ Limited rent increases (set by Rent Guidelines Board, usually 1-3% annually)
✅ Right to lease renewal (1 or 2 years, your choice)
✅ Can only be evicted for specific legal reasons
✅ Right to get rent history
✅ Protection from harassment

RENT OVERCHARGES:
If landlord charges more than legal rent:
• You can file DHCR complaint (up to 4 years back rent)
• Landlord must refund overcharge + triple damages
• Illegal rent can be adjusted down permanently
• Filing deadline: 4 years from overcharge

COMMON ILLEGAL CHARGES:
❌ Increasing rent more than RGB allows
❌ Charging for "preferential rent" increases
❌ Illegal deregulation
❌ Improper MCI or IAI increases
❌ Not offering renewal lease

PREFERENTIAL RENT:
• If you pay less than legal regulated rent, that's "preferential"
• Under new law (2019), preferential rent stays with apartment
• Landlord can only raise preferential rent by RGB amount

MAJOR CAPITAL IMPROVEMENTS (MCI):
• Landlord can add surcharge for building-wide improvements (new roof, boiler, etc.)
• Must be approved by DHCR
• You can challenge MCI applications
• MCI increases are limited and temporary (removed after amortization)

INDIVIDUAL APARTMENT IMPROVEMENTS (IAI):
• Landlord can increase rent for apartment improvements
• Must have receipts and proof
• You can challenge if work wasn't done or was ordinary maintenance
• New limits on IAI increases (effective 2019)

CHECK YOUR RENT HISTORY:
Request from DHCR: www.hcr.ny.gov or call (718) 739-6400

If you think you're overcharged:
1. Request rent history from DHCR
2. Compare to legal rent on history
3. File DHCR overcharge complaint
4. Get legal help: Legal Aid (212) 577-3300

Time sensitive: You must file within 4 years of overcharge!`
  },
  {
    keywords: ['lease renewal', 'renew lease', 'lease termination', 'lease end'],
    category: 'Lease Renewals',
    response: `📝 LEASE RENEWALS & TERMINATIONS

Your rights depend on whether you're rent-stabilized or market-rate.

RENT-STABILIZED TENANTS:
✅ You have RIGHT to renew your lease
✅ Landlord must offer renewal 90-150 days before lease ends
✅ You choose: 1-year or 2-year renewal
✅ Rent increase limited to Rent Guidelines Board rates
✅ Landlord CANNOT refuse renewal (except for specific legal causes)

If landlord doesn't offer renewal:
• File complaint with DHCR: (718) 739-6400
• Landlord faces penalties
• You can stay in apartment

MARKET-RATE TENANTS:
• No automatic right to renewal
• Landlord can choose not to renew
• Must give proper notice (see below)

NOTICE REQUIREMENTS (to NOT renew):
• Less than 1 year: No notice required (lease just ends)
• 1-2 years: 30 days notice
• More than 2 years: 90 days notice
• In rent-stabilized: 90-150 days

If landlord doesn't give proper notice, you can stay month-to-month.

LEASE TERMINATION BY TENANT:
• You can leave when lease ends (give 30 days notice)
• Breaking lease early: you may owe rent until new tenant found
• Domestic violence victims: special right to break lease
• Uninhabitable conditions: may be able to break lease

AUTOMATIC RENEWAL CLAUSES:
• Some leases automatically renew if you don't give notice
• Read your lease carefully
• Give notice in writing (certified mail)

LEASE CHANGES:
• Landlord cannot change major terms on renewal
• Rent-stabilized: renewal must be on standard DHCR form
• Any illegal clauses are unenforceable

MONTH-TO-MONTH TENANCY:
If you stay after lease ends (with landlord permission):
• You become month-to-month tenant
• Landlord can raise rent with 30 days notice (market-rate)
• To evict: landlord must give 30 days notice

GET EVERYTHING IN WRITING!
Always communicate about lease renewals in writing (email or letter).

Need help? Legal Aid: (212) 577-3300
DHCR (rent-stabilized): (718) 739-6400`
  },
  {
    keywords: ['security deposit', 'deposit', 'last month rent', 'move out'],
    category: 'Security Deposits',
    response: `💰 SECURITY DEPOSIT RULES

NYC has specific laws about security deposits - know your rights!

SECURITY DEPOSIT LIMITS:
• Maximum: One month's rent
• Cannot demand more than one month
• Last month's rent + security = OK if total ≤ one month
• Rent-stabilized: deposits limited

LANDLORD MUST:
• Keep deposit in NYC bank account (interest-bearing if building has 6+ units)
• Provide bank info within 30 days of receiving deposit
• Pay you annual interest (if required)
• Return deposit within 14 days after move-out
• Provide itemized list of deductions

DEDUCTIONS ALLOWED:
✅ Unpaid rent
✅ Damage beyond normal wear and tear
✅ Cleaning (if apartment left dirty)

NOT ALLOWED:
❌ Normal wear and tear (paint fading, carpet wear from use)
❌ Repairs needed due to landlord's neglect
❌ Cleaning for normal dirt
❌ Damage that existed before you moved in

GETTING DEPOSIT BACK:
1. Take photos when moving in AND moving out
2. Do walkthrough with landlord (document condition)
3. Give forwarding address in writing
4. Clean apartment thoroughly
5. Fix any damage you caused

IF LANDLORD DOESN'T RETURN DEPOSIT:
• Send written demand (certified mail)
• If no response in 14 days, you can sue
• Sue in Small Claims Court (up to $10,000)
• May be able to get DOUBLE damages if landlord acted in bad faith
• Can also get court costs and filing fees

MOVE-OUT CHECKLIST:
□ Clean apartment
□ Remove all belongings
□ Repair any damage you caused
□ Take photos/video of condition
□ Return all keys
□ Provide forwarding address
□ Keep copies of all communications

INTEREST ON DEPOSITS:
If building has 6+ units:
• Deposit must be in interest-bearing account
• You get interest minus 1% admin fee
• Landlord must pay annually or credit to rent

Common illegal deductions:
• Repainting (unless you damaged walls)
• Carpet cleaning (unless damaged or filthy)
• Minor nail holes from pictures
• Normal appliance wear

SUE IN SMALL CLAIMS:
• File in Small Claims Court: $25 filing fee
• No lawyer needed
• Bring: photos, lease, receipts, correspondence
• Court location: where apartment is located

Get help: Housing Court Answers: (212) 962-4795
Legal Aid: (212) 577-3300`
  },
  {
    keywords: ['sublet', 'sublease', 'roommate', 'roommate law'],
    category: 'Subletting & Roommates',
    response: `🏠 SUBLETTING & ROOMMATE RIGHTS

NYC has special laws protecting your right to roommates and sublets.

ROOMMATE LAW (NYC Admin Code):
✅ You have RIGHT to have roommates (in most cases)
✅ Can have immediate family + one additional person
✅ OR primary tenant + 3 total occupants (whichever is more)
✅ Landlord CANNOT prohibit roommates (law overrides lease)
✅ No "immediate family only" clauses allowed

WHO COUNTS AS ROOMMATE:
• Spouse or domestic partner
• Children
• Parents
• Anyone you let move in
• Does NOT include subtenants

SUBLETTING (Rent-Stabilized):
✅ You have RIGHT to sublet (with landlord approval)
✅ Can sublet for up to 2 years out of 4-year period
✅ Must get landlord's permission (request in writing)
✅ Landlord must respond within 30 days
✅ Landlord can only refuse for "reasonable" reasons
✅ If landlord doesn't respond in 30 days = automatic approval
✅ You can charge subtenant up to 10% more than your rent

SUBLETTING (Market-Rate):
• Check your lease - may prohibit or restrict subletting
• Must get landlord permission (usually)
• Landlord may require approval of subtenant
• If lease silent, you may still need permission

HOW TO REQUEST SUBLET APPROVAL:
1. Send written request to landlord (certified mail)
2. Include: subtenant info, sublease term, rent amount
3. Attach proposed sublease agreement
4. Landlord has 30 days to respond (rent-stabilized)
5. If approved, send copy of signed sublease to landlord

LANDLORD CAN REFUSE IF:
• Subtenant financially unreliable
• Too many people for apartment size
• Subtenant plans illegal use
• Your request has false information

LANDLORD CANNOT REFUSE FOR:
• Arbitrary reasons
• Discrimination
• Just because they don't like sublets
• To re-rent at higher price

IF LANDLORD UNREASONABLY REFUSES:
• You may be able to break your lease without penalty
• Can sue landlord
• DHCR can order landlord to allow sublet

AIRBNB & SHORT-TERM RENTALS:
⚠️ MOSTLY ILLEGAL in NYC!
• Cannot rent entire apartment for less than 30 days
• Can rent room if you're present
• Building with 3+ units: illegal to rent <30 days
• Heavy fines: up to $7,500 per violation
• Landlord can evict you for illegal Airbnb

ROOMMATE TIPS:
• Put roommate agreement in writing
• Decide how to split rent/utilities
• All roommates should be on lease if possible
• Notify landlord of new roommates (good practice)

YOUR RESPONSIBILITIES:
• You remain responsible for full rent
• Responsible for subtenant's behavior
• Must maintain apartment
• Can't sublet for more than 2 years out of 4 (rent-stabilized)

Get help: 
DHCR (rent-stabilized sublets): (718) 739-6400
Legal Aid: (212) 577-3300`
  },

  // 4. Evictions
  {
    keywords: ['eviction process', 'housing court', 'eviction steps', 'how eviction works'],
    category: 'Eviction Process',
    response: `⚖️ NYC EVICTION PROCESS - COMPLETE GUIDE

Eviction is a LEGAL PROCESS. Landlord cannot force you out - only a court can.

LEGAL EVICTION STEPS:
1️⃣ NOTICE: Landlord serves written notice (14, 30, 60, or 90 days)
2️⃣ PETITION: Landlord files petition in Housing Court
3️⃣ SERVICE: You receive court papers
4️⃣ ANSWER: You have time to file answer (usually 10 days)
5️⃣ HEARING: Court hearing before judge
6️⃣ DECISION: Judge decides case
7️⃣ WARRANT: If you lose, court issues warrant of eviction
8️⃣ MARSHAL NOTICE: Marshal gives 72-hour notice
9️⃣ EVICTION: Marshal can physically remove you

⏱️ TIMELINE:
• Minimum: 4-6 weeks from notice to eviction
• Usually: 3-6 months (or longer with defenses)
• Can be a year+ if you have strong defenses

YOUR RIGHTS THROUGHOUT:
✅ Right to receive proper notice
✅ Right to answer petition
✅ Right to appear in court
✅ Right to FREE attorney (NYC Right to Counsel)
✅ Right to defend yourself
✅ Right to appeal
✅ Right to request time to move

TYPES OF EVICTION CASES:
• NONPAYMENT: You owe rent (most common)
• HOLDOVER: Lease ended or other reason
• NUISANCE: Alleged bad behavior
• ILLEGAL USE: Using apartment for illegal purpose
• OWNER USE: Landlord/family wants to move in (very rare)

NONPAYMENT CASES:
• Most common type
• You can STOP eviction by paying rent owed
• Can request payment plan
• May have defenses (repairs, harassment, overcharge)
• Right to cure (pay rent) until warrant executed

DEFENSES TO EVICTION:
✅ Landlord's harassment
✅ Failure to make repairs (breach of warranty of habitability)
✅ Rent overcharge
✅ Improper notice
✅ Retaliation
✅ Discrimination
✅ Landlord didn't maintain building
✅ You already paid rent

WHAT HAPPENS IN COURT:
1. First appearance: "Initial Conference"
2. Judge may send to mediation
3. You can negotiate settlement (stipulation)
4. If no settlement: trial
5. Both sides present evidence
6. Judge issues decision

STIPULATIONS:
• Agreement between you and landlord
• Usually includes payment plan and behavior terms
• MUST follow exactly - or you can be evicted immediately
• Get legal advice before signing!

IF YOU LOSE:
• Don't panic - you still have time
• Warrant of eviction issued (not immediate)
• Marshal must give 72-hour notice
• You can request "stay" (more time)
• Can appeal (rarely succeeds)

WARRANT OF EVICTION:
• Valid for 60 days
• Marshal can schedule eviction anytime in that period
• Must give 72-hour notice
• You can request 10-day stay from court

72-HOUR NOTICE:
• Marshal posts notice on your door
• You have 72 hours to move out
• Marshal returns with movers
• Your belongings put in storage (you must pay to get them)

⚠️ NEVER SKIP COURT!
If you don't appear:
• Automatic default judgment against you
• Lose right to defend
• Eviction proceeds quickly

GET FREE LEGAL HELP:
🔹 NYC Right to Counsel: All tenants in housing court get free attorney
🔹 Housing Court Answers: (212) 962-4795
🔹 Legal Aid Society: (212) 577-3300
🔹 Show up early to court - lawyers available

HOUSING COURT LOCATIONS:
• Bronx: 1118 Grand Concourse
• Brooklyn: 141 Livingston Street
• Manhattan: 111 Centre Street
• Queens: 89-17 Sutphin Blvd
• Staten Island: 927 Castleton Avenue

Remember: Eviction takes TIME. Use that time to get legal help and fight!`
  },
  {
    keywords: ['notice', '14 day', '30 day', '60 day', '90 day', 'termination notice', 'pay rent notice'],
    category: 'Eviction Notices',
    response: `📋 EVICTION NOTICES - WHAT THEY MEAN

Different situations require different notices. Know what you received!

14-DAY NOTICE (Rent Demand):
• For nonpayment of rent
• Must demand specific amount owed
• Gives you 14 days to pay
• If you pay within 14 days, eviction stops
• Must state exact months/amount
• Month-to-month and lease tenants

30-DAY NOTICE (Termination):
• To end month-to-month tenancy
• For leases less than 1 year, or
• For tenants living there less than 1 year
• Landlord doesn't need reason (non-rent-stabilized)
• Must be 30 days before termination date
• Rent-stabilized: needs REASON (can't just terminate)

60-DAY NOTICE (Termination):
• For tenants in residence 1-2 years
• For leases more than 1 year but less than 2 years
• Same as 30-day but longer period

90-DAY NOTICE (Termination):
• For tenants in residence more than 2 years
• For leases more than 2 years
• Rent-stabilized: standard notice period
• Must state specific legal reason for termination

10-DAY NOTICE (Nuisance):
• For objectionable conduct
• For lease violations
• Must describe specific behavior
• You have 10 days to "cure" (fix) problem
• Less common than nonpayment

30-DAY NOTICE (Lease Violation):
• For serious lease violations
• Must specify what you violated
• May or may not be curable

NOTICE MUST INCLUDE:
✅ Your name and address
✅ Reason for eviction (if applicable)
✅ Amount owed (if nonpayment)
✅ Time period to cure or move
✅ Statement about seeking legal advice
✅ Proper legal language

IMPROPER NOTICE = DEFENSE!
Notice is defective if:
❌ Wrong amount demanded
❌ Wrong time period
❌ Missing required information
❌ Not properly served
❌ Vague reasons given
❌ No reason given (when required)

HOW NOTICE MUST BE SERVED:
• Hand-delivered to you personally, OR
• "Nail and mail": attached to door + mailed, OR
• Given to person of suitable age at residence
• Just putting under door or in mailbox = NOT valid

WHAT TO DO WHEN YOU GET NOTICE:
1. DON'T IGNORE IT!
2. Read it carefully
3. Save original and make copies
4. Note date you received it
5. Calculate deadline
6. Call Legal Aid immediately: (212) 577-3300
7. Gather defense documents (receipts, photos, communications)

CAN YOU FIX IT?
• Nonpayment: Pay rent owed (get receipt!)
• Lease violation: Correct the problem
• Nuisance: Stop the behavior
• Some notices are "curable" - some aren't

AFTER NOTICE PERIOD:
• Landlord cannot force you out
• Must file petition in Housing Court
• You'll receive court papers
• APPEAR IN COURT and get free lawyer

RENT-STABILIZED SPECIAL RULES:
• Landlord must have LEGAL REASON to evict
• Must offer lease renewal before termination
• Longer notice periods
• More protections

NOTICES DON'T MEAN EVICTION!
• Notice is just FIRST step
• Landlord still must go to court
• You have right to defend
• Many people successfully fight evictions

Contact Housing Court Answers: (212) 962-4795
Legal Aid Society: (212) 577-3300`
  },

  // 5. Housing Court & Legal Process
  {
    keywords: ['answer petition', 'answering', 'deadline', 'how to answer'],
    category: 'Answering Petition',
    response: `📄 HOW TO ANSWER AN EVICTION PETITION

When you receive court papers, you usually have 10 DAYS to file an Answer. DO NOT MISS THIS DEADLINE!

WHAT IS AN ANSWER?
• Your written response to landlord's petition
• States your defenses
• Admits/denies landlord's claims
• REQUIRED to defend yourself in court

DEADLINE:
• Usually 10 days from when you were served
• If served by "nail and mail": 10 days from mailing date
• Weekends and holidays don't count
• Missing deadline = DEFAULT JUDGMENT (you automatically lose)

WHERE TO FILE:
• Same Housing Court where petition was filed
• Bronx, Brooklyn, Manhattan, Queens, or Staten Island
• Clerk's office during business hours

WHAT TO INCLUDE IN ANSWER:
1. Case number (from petition)
2. Your name and address
3. Admit or deny each claim
4. List your defenses
5. Counterclaims (if any)
6. Your signature

COMMON DEFENSES:
✅ Rent was paid
✅ Apartment has serious repairs needed (warranty of habitability)
✅ Landlord harassed you
✅ Rent is illegally high (overcharge)
✅ Improper notice
✅ Retaliation for complaints
✅ Discrimination
✅ Landlord didn't make repairs
✅ You withheld rent legally

ANSWER FORMS:
• Free forms available at Housing Court
• Housing Court Answers can help: (212) 962-4795
• Templates available online: nycourts.gov
• Free legal help at court

HOW TO FILE:
1. Go to Housing Court clerk's office
2. Bring original + 2 copies
3. File with clerk (get stamped copy)
4. Mail copy to landlord's attorney
5. Keep copy for yourself

FILING FEE:
• Usually $45
• Can request fee waiver if you can't afford (poverty affidavit)
• Bring proof of income

IF YOU MISS DEADLINE:
• You can still go to court
• Ask judge to accept late answer ("good cause")
• Harder to defend but still possible
• GET TO COURT IMMEDIATELY

WHAT HAPPENS AFTER FILING ANSWER:
1. Case stays active
2. You'll get court date
3. Both sides present case
4. Judge makes decision

EASIER OPTION - GO TO COURT:
• You don't HAVE to file written answer
• Can just appear at first court date
• Free lawyers available at court (NYC Right to Counsel)
• Lawyer can help you answer

NYC RIGHT TO COUNSEL:
🎯 ALL tenants in NYC eviction cases get FREE ATTORNEY!
• Show up to court
• Tell clerk you need a lawyer
• You'll be assigned attorney same day
• Attorney will help you answer and defend

COURT ADDRESSES:
📍 Bronx: 1118 Grand Concourse (718) 618-2600
📍 Brooklyn: 141 Livingston St (347) 404-9201
📍 Manhattan: 111 Centre St (646) 386-5750
📍 Queens: 89-17 Sutphin Blvd (718) 262-7100
📍 Staten Island: 927 Castleton Ave (718) 675-8538

TIPS:
• Bring all documents (lease, receipts, photos)
• Arrive early (courts are crowded)
• Dress appropriately
• Be respectful to judge
• Tell the truth

DON'T REPRESENT YOURSELF - GET FREE LAWYER!
Every tenant facing eviction in NYC gets free attorney. USE THIS RIGHT!

Help available:
🔹 Housing Court Answers: (212) 962-4795
🔹 Legal Aid Society: (212) 577-3300
🔹 At court: Ask for "Right to Counsel" attorney`
  },
  {
    keywords: ['right to counsel', 'free lawyer', 'free attorney', 'legal representation'],
    category: 'Right to Counsel',
    response: `⚖️ NYC RIGHT TO COUNSEL - FREE LAWYERS FOR ALL!

NYC guarantees FREE LEGAL REPRESENTATION for ALL tenants facing eviction in Housing Court!

WHO QUALIFIES:
✅ EVERYONE facing eviction in NYC
✅ No income requirements
✅ Doesn't matter if you owe rent
✅ Applies to ALL boroughs
✅ Includes nonpayment and holdover cases

HOW TO GET FREE LAWYER:
1. Show up to Housing Court
2. Tell court staff you need Right to Counsel attorney
3. You'll be assigned lawyer same day
4. Lawyer will represent you throughout case
5. Completely FREE - no cost

WHAT YOUR LAWYER WILL DO:
• Review your case
• File answer to petition
• Appear with you in court
• Negotiate with landlord's attorney
• Present your defenses
• Cross-examine witnesses
• Try to get case dismissed or get you best outcome

YOUR LAWYER CAN HELP:
✅ Stop eviction
✅ Get repairs done
✅ Reduce rent owed
✅ Get payment plan
✅ Sue for overcharges
✅ File complaints against landlord
✅ Get you more time to move (if needed)

WHEN TO ARRIVE:
• Get to court EARLY (by 9 AM)
• Courts are crowded
• Earlier = more time with lawyer
• Bring all documents

WHAT TO BRING:
📋 Court papers (petition/notice)
📋 Lease
📋 Rent receipts
📋 Photos of apartment conditions
📋 HPD complaints
📋 Medical records (if relevant)
📋 Correspondence with landlord
📋 Proof of income
📋 Any other relevant documents

ORGANIZATIONS PROVIDING RIGHT TO COUNSEL:
• Legal Aid Society
• Legal Services NYC
• Brooklyn A
• Housing Court Answers
• MFY Legal Services
• CAMBA Legal Services
• Many others

WHY THIS MATTERS:
📊 With lawyer: 84% of tenants avoid eviction
📊 Without lawyer: Only 26% avoid eviction
🏠 Right to Counsel = HUGE difference!

RESULTS WITH LAWYER:
• Stay in apartment
• Get repairs done
• Negotiate affordable payment plans
• Reduce amount owed
• Get rent abatement
• Expose illegal rent
• Much better outcomes

IF LANDLORD HAS LAWYER:
Don't worry! You'll get one too. It's your RIGHT.

CONFIDENTIALITY:
Everything you tell your lawyer is confidential. Be honest so they can help you best.

NOT JUST FOR POOR PEOPLE:
Right to Counsel is for EVERYONE regardless of income. All NYC tenants in eviction cases qualify.

OUTSIDE NYC:
If you're outside NYC, you may still qualify for free legal help through:
• Legal Services organizations
• Pro bono programs
• Income-based eligibility

For non-eviction housing issues in NYC, you can still get free help from Legal Aid and other organizations (call to check eligibility).

CONTACT INFO:
🔹 Legal Aid Society Hotline: (212) 577-3300
🔹 Housing Court Answers: (212) 962-4795
🔹 At court: Ask for intake desk

REMEMBER: You do NOT have to face eviction alone. NYC law guarantees you a FREE lawyer. Use this right!

This is one of the strongest tenant protections in the United States. Take advantage of it!`
  },

  // 6. Rent Increases & Rent Control
  {
    keywords: ['rent increase', 'rent guidelines board', 'rgb', 'how much can rent go up'],
    category: 'Rent Increases',
    response: `📈 RENT INCREASES - KNOW THE RULES

How much your rent can increase depends on whether you're rent-stabilized or market-rate.

RENT-STABILIZED APARTMENTS:
✅ Increases LIMITED by Rent Guidelines Board (RGB)
✅ RGB sets rates annually (usually 1-3%)
✅ For 1-year lease: one rate
✅ For 2-year lease: higher rate (but spread over 2 years)
✅ Landlord CANNOT charge more than RGB rate

2024 RGB RATES (example):
• 1-year lease: up to 3%
• 2-year lease: up to 2.75%
(Rates change yearly - check current rates)

WHEN CAN RENT-STABILIZED RENT INCREASE:
• At lease renewal only
• By RGB percentage
• Plus any approved MCI or IAI (see below)
• Plus vacancy increase (if new tenant)

MARKET-RATE APARTMENTS:
• No legal limit on increases
• Landlord can raise rent to any amount
• Usually at lease renewal
• Month-to-month: 30 days notice required

RENT INCREASES THAT ARE ILLEGAL:
❌ Mid-lease (unless lease says otherwise)
❌ Without proper notice (30 days for month-to-month)
❌ Above RGB rates (rent-stabilized)
❌ Retaliatory increases
❌ As punishment for complaints

MAJOR CAPITAL IMPROVEMENTS (MCI):
• Building-wide improvements (new roof, boiler, windows, etc.)
• Landlord can add temporary surcharge
• Must be approved by DHCR
• You can challenge MCI application
• Increases limited to 2% per year (rent-stabilized)
• MCI increases are TEMPORARY (removed after paid off)

INDIVIDUAL APARTMENT IMPROVEMENTS (IAI):
• Improvements to YOUR apartment
• Can increase rent if substantial improvements
• Landlord must have receipts
• New limits under 2019 law:
  - Capped at 1/168th of cost (over 12.5 years)
  - Maximum $15,000 over 15 years
• You can challenge if work wasn't done

PREFERENTIAL RENT:
• If you pay LESS than legal regulated rent
• Under new law (2019): preferential rent is "sticky"
• Increases limited to RGB rates on preferential rent
• Landlord cannot jump to legal regulated rent

VACANCY INCREASES (Rent-Stabilized):
When tenant moves out, landlord can increase for new tenant:
• Vacancy lease increase (varies by lease term)
• Plus longevity increase (if previous tenant there 8+ years)
• Plus IAI (if improvements made)
• But must follow DHCR rules

HOW TO CHALLENGE ILLEGAL INCREASE:
1. Check if you're rent-stabilized
2. Request rent history from DHCR
3. Compare to legal rent
4. File DHCR overcharge complaint
5. Get legal help: (212) 577-3300

IF LANDLORD DEMANDS ILLEGAL INCREASE:
• Don't pay it
• Pay only legal amount
• File DHCR complaint
• Document everything
• Get legal help

NOTICE REQUIREMENTS:
• Rent-stabilized: Landlord must give you renewal lease 90-150 days before expiration
• Renewal lease shows new rent
• You have 60 days to sign and return

NEGOTIATING INCREASES:
• Market-rate: You can negotiate
• Ask for smaller increase
• Offer longer lease for smaller increase
• Landlord may want to keep good tenant

MAJOR RED FLAGS:
🚩 Huge sudden increase (market-rate)
🚩 Increase above RGB rate (rent-stabilized)
🚩 No proper notice
🚩 Increase mid-lease
🚩 Retaliatory increase after complaint

GET CURRENT RGB RATES:
Visit: rentguidelinesboard.cityofnewyork.us
Or call: (212) 385-2934

CHECK IF RENT IS LEGAL:
Request rent history: DHCR (718) 739-6400
File online: hcr.ny.gov

HELP:
🔹 DHCR (rent-stabilized): (718) 739-6400
🔹 Legal Aid Society: (212) 577-3300
🔹 Housing Court Answers: (212) 962-4795

Don't accept illegal rent increases! Challenge them!`
  },

  // 7. Discrimination & Fair Housing
  {
    keywords: ['discrimination', 'source of income', 'section 8', 'voucher', 'cityfheps', 'fair housing'],
    category: 'Housing Discrimination',
    response: `⚖️ HOUSING DISCRIMINATION IS ILLEGAL

NYC has some of the strongest fair housing protections in the country!

ILLEGAL TO DISCRIMINATE BASED ON:
❌ Race or color
❌ National origin
❌ Religion
❌ Sex/gender
❌ Disability
❌ Age
❌ Sexual orientation/gender identity
❌ Marital status
❌ Family status (having children)
❌ SOURCE OF INCOME ⭐ (vouchers, benefits)
❌ Immigration status
❌ Occupation
❌ Arrest or conviction record (in housing)

SOURCE OF INCOME DISCRIMINATION:
🚫 Landlord CANNOT refuse you because you have:
• Section 8 voucher
• CityFHEPS
• FHEPS
• HASA
• Veterans benefits
• Social Security
• Disability benefits
• Child support
• Any lawful source of income

NYC HUMAN RIGHTS LAW:
• Broader than federal Fair Housing Act
• More protected classes
• Stronger enforcement
• Covers almost all housing (buildings with 1+ units)

EXAMPLES OF DISCRIMINATION:
• "No Section 8"
• "Adults only" (families with children)
• Different terms for different races
• Refusing reasonable accommodation for disability
• Steering (showing different units based on race)
• Asking about immigration status
• Higher rent/deposit for protected class

REASONABLE ACCOMMODATIONS (Disability):
✅ Landlord MUST make reasonable accommodations
• Allow service/emotional support animal (even if no pets)
• Modify rules/policies
• Allow caregiver access
• Install grab bars (tenant may pay)
• Accessible parking space

Examples:
• ESA animal in no-pet building
• Ground floor unit for mobility issues
• Larger print documents for vision impairment
• Alternative communication methods

REASONABLE MODIFICATIONS (Disability):
• Physical changes to unit
• Usually tenant pays
• Must restore when moving out (sometimes)
• Landlord must allow

WHAT TO DO IF YOU FACE DISCRIMINATION:
1. Document everything
   - Dates, times, what was said
   - Names of people involved
   - Witnesses
   - Save emails, texts, ads

2. Test for discrimination
   - Have friend (different race/background) inquire
   - See if they get different treatment
   - Document differences

3. File complaint with:
   📍 NYC Commission on Human Rights (NYCCHR)
      - Call: 311
      - File online: nyc.gov/humanrights
      - Covers NYC discrimination
      - NO COST to file
      - Strong enforcement

   📍 NYS Division of Human Rights (NYSDHR)
      - Call: (718) 741-8400
      - Covers state-wide
      - Alternative to NYCCHR

   📍 HUD (Federal)
      - Call: 1-800-669-9777
      - For Fair Housing Act violations
      - Can file within 1 year

4. Get legal help:
   - Legal Aid Society: (212) 577-3300
   - Make the Road NY: (718) 418-7690
   - NYLAG: (212) 613-5000

YOU CAN SUE:
• Monetary damages
• Emotional distress damages
• Punitive damages (to punish discriminator)
• Attorney's fees
• Housing you were denied

SECTION 8 / VOUCHER HOLDERS:
NYC law explicitly prohibits source of income discrimination!

If landlord says "no Section 8":
1. File complaint with NYCCHR
2. Report to NYCHA (for Section 8)
3. Contact legal aid
4. You can sue

Landlord MUST:
• Accept voucher
• Work with housing authority
• Not set rent above payment standard (to exclude vouchers)
• Not add extra fees/requirements

IMMIGRATION STATUS:
• Cannot refuse to rent based on immigration status
• Cannot demand proof beyond standard ID/income verification
• Threatening to report immigration = illegal harassment

CRIMINAL/ARREST RECORDS:
NYC Fair Chance Act:
• Landlord cannot ask about criminal history on application
• Can only ask AFTER conditional offer
• Must do individualized assessment
• Many arrests/convictions cannot be used
• You can explain circumstances

FAMILIES WITH CHILDREN:
• Cannot refuse families
• Cannot restrict to certain floors
• Cannot charge more for children
• Cannot have "adults only" policy
• Lead paint is not excuse to exclude children

WHAT LANDLORD CAN ASK:
✅ Income verification
✅ Credit check
✅ Rental history
✅ Employment
✅ References

CANNOT ASK:
❌ Where is income from (if lawful)
❌ Immigration status
❌ Criminal history (on application)
❌ Family plans / whether you'll have children
❌ Disability (unless requesting accommodation)

TIME LIMITS:
• NYCCHR: 1 year from discrimination
• NYSDHR: 1 year
• HUD: 1 year
• Civil lawsuit: 3 years

REMEDIES:
You can get:
💰 Compensatory damages (actual losses)
💰 Emotional distress damages
💰 Punitive damages (up to $250,000)
💰 Attorney's fees
💰 Civil penalties paid to you
🏠 The housing (if still available)

NYC TAKES DISCRIMINATION SERIOUSLY!
Don't let landlords get away with it. File complaints!

FILE COMPLAINTS:
🔹 NYC Human Rights: 311 or nyc.gov/humanrights
🔹 Legal Aid: (212) 577-3300
🔹 Make the Road: (718) 418-7690
🔹 HUD Hotline: 1-800-669-9777`
  },

  // 9. Rent Relief & Programs
  {
    keywords: ['cityfheps', 'fheps', 'section 8', 'voucher', 'rental assistance', 'erap', 'emergency assistance'],
    category: 'Rent Relief Programs',
    response: `💵 NYC RENT RELIEF & ASSISTANCE PROGRAMS

Many programs available to help pay rent and avoid eviction!

CITYFHEPS (City Fighting Homelessness & Eviction Prevention Supplement):
✅ Rental assistance for families and individuals
✅ Pays difference between 30% of income and rent
✅ Can be used citywide
✅ Works with any landlord (must accept)

Eligibility:
• NYC resident
• At risk of eviction or homelessness
• Income below limits
• Working or unable to work
• Rent must be "reasonable"

Apply: Through HRA (Human Resources Administration)
Call: 311 to start application

SECTION 8 (Housing Choice Voucher):
✅ Federal rental assistance
✅ Pays portion of rent based on income
✅ Can use anywhere that accepts Section 8
✅ Long-term assistance

Eligibility:
• Very low income (usually below 50% AMI)
• NYC resident
• U.S. citizen or eligible immigrant

⚠️ WAITLIST: Currently closed (opens occasionally)
Check: NYCHA.org for waitlist updates

FHEPS (Family Homelessness & Eviction Prevention Supplement):
Similar to CityFHEPS but for specific situations:
• Families with children
• Facing eviction or homelessness
• Income below limits

ONE SHOT DEAL (Emergency Assistance):
✅ One-time payment for emergency situations
✅ Can pay rent arrears to avoid eviction
✅ Can pay moving costs
✅ Can pay utility bills
✅ Can pay first month/security deposit

Eligibility:
• NYC resident
• Facing eviction or homelessness
• Emergency situation
• No other resources
• Income below limits

Apply: HRA office or call 311

EMERGENCY RENTAL ASSISTANCE PROGRAM (ERAP):
⚠️ Note: May have ended or limited funding
• COVID-related rent assistance
• Covered back rent and future rent
• Check current availability: otda.ny.gov/erap

HEAP (Home Energy Assistance Program):
✅ Help with heating bills
✅ November - March (regular)
✅ Emergency assistance year-round

Eligibility:
• Low income
• NYC resident
• Responsible for heating bills

Apply: Call 311 or visit HRA

HASA (HIV/AIDS Services Administration):
For people living with HIV/AIDS:
• Rental assistance
• Emergency cash assistance
• Housing placement
• Support services

Contact: (212) 577-7970

SEPS (Special Exit and Prevention Supplement):
For families and adults leaving shelter:
• Rental assistance
• Move-in costs
• Security deposit

SCRIE (Senior Citizen Rent Increase Exemption):
✅ Freeze rent for seniors (62+)
✅ Rent-stabilized and rent-controlled
✅ Income below $50,000
✅ Pay 1/3 of income for rent

Apply: NYC Dept of Finance
Call: 311

DRIE (Disability Rent Increase Exemption):
✅ Freeze rent for people with disabilities
✅ Same as SCRIE but for disabled
✅ Must receive disability benefits
✅ Income below $50,000

Apply: NYC Dept of Finance

RENTAL ASSISTANCE FOR VETERANS:
• VA Supportive Housing (VASH)
• Veterans benefits
• Special veteran programs

Contact: VA at 1-877-424-3838

HOW TO APPLY FOR MOST PROGRAMS:
1. Call 311
2. Visit HRA office (locations vary)
3. Bring documents:
   - ID
   - Proof of income
   - Lease
   - Eviction notice (if applicable)
   - Social Security cards
   - Birth certificates (for children)

DOCUMENTS NEEDED:
📋 Government-issued ID
📋 Social Security card
📋 Proof of income (pay stubs, benefits letter)
📋 Rent receipts or lease
📋 Eviction papers (if applicable)
📋 Proof of NYC residency
📋 Bank statements
📋 Birth certificates (for children)

IF FACING EVICTION:
1. Apply for emergency assistance IMMEDIATELY
2. Bring eviction papers to HRA
3. Request One Shot Deal
4. Go to housing court - tell judge you applied for assistance
5. Judge may adjourn case while application pending

TIMELINE:
• Emergency cases: can be processed quickly (days)
• Regular cases: may take weeks
• Bring proof of emergency (eviction notice)

TIPS:
✅ Apply early - don't wait until last minute
✅ Follow up regularly
✅ Keep copies of everything
✅ Get case number
✅ Document all interactions
✅ Be persistent

SOURCE OF INCOME PROTECTION:
Remember: Landlords CANNOT refuse CityFHEPS, Section 8, or other vouchers!
• That's source of income discrimination
• File complaint with NYCCHR
• Contact legal aid

WHERE TO APPLY:
🏢 HRA Locations: Find nearest at nyc.gov/hra
📞 Call 311 for appointments
💻 ACCESS HRA app: for some benefits

LEGAL HELP:
Many programs complex - get help:
🔹 Legal Aid Society: (212) 577-3300
🔹 NYLAG: (212) 613-5000
🔹 Catholic Charities: (212) 371-1000
🔹 Coalition for the Homeless: (212) 776-2000

ADDITIONAL RESOURCES:
• Food stamps (SNAP)
• Cash assistance
• Medicaid
• Child care assistance
• Job training

Apply for multiple benefits - you may qualify for several!

Don't wait until crisis - apply for help early!`
  },

  // 11. HPD & DHCR Complaints
  {
    keywords: ['hpd', 'complaint', 'violations', 'file complaint', 'dhcr'],
    category: 'HPD & DHCR Complaints',
    response: `📞 FILING HPD & DHCR COMPLAINTS

Two main agencies handle tenant complaints in NYC:

HPD (NYC DEPT OF HOUSING PRESERVATION & DEVELOPMENT):
For: Building conditions, repairs, services, harassment

DHCR (NYS DIVISION OF HOUSING & COMMUNITY RENEWAL):
For: Rent-stabilized issues, overcharges, lease violations

━━━━━━━━━━━━━━━━━━━━━━
HPD COMPLAINTS
━━━━━━━━━━━━━━━━━━━━━━

WHEN TO FILE WITH HPD:
✅ No heat or hot water
✅ Leaks, mold, water damage
✅ Broken windows, doors, locks
✅ Pest infestations
✅ No gas or electricity (landlord's fault)
✅ Lead paint hazards
✅ Structural problems
✅ Missing smoke/CO detectors
✅ Landlord harassment
✅ Illegal lockout
✅ Any housing code violations

HOW TO FILE:
📞 Call 311 (24/7)
💻 Online: portal.311.nyc.gov
📱 311 Mobile App

WHAT HAPPENS:
1. You file complaint
2. HPD inspector visits (within days)
3. Inspector issues violations if problems found
4. Landlord gets notice to fix
5. Timeframe to fix based on severity:
   - Class C (immediately hazardous): 24 hours
   - Class B (hazardous): 30 days
   - Class C (non-hazardous): 90 days
6. If not fixed: HPD can do emergency repair and bill landlord

VIOLATION CLASSES:
• CLASS C (Immediately Hazardous):
  - No heat in winter
  - No water
  - Gas leaks
  - Lead paint with child under 6
  - Structural collapse risk

• CLASS B (Hazardous):
  - Mold, leaks
  - Broken locks
  - Pest infestation
  - No hot water
  - Peeling paint

• CLASS A (Non-Hazardous):
  - Minor repairs
  - Cosmetic issues

HARASSMENT COMPLAINTS (HPD):
Special process for harassment:
• File with Office of Tenant Advocate
• Call 311 and say "tenant harassment"
• Can result in:
  - Harassment violations
  - Stop work orders on building
  - Fines up to $10,000+
  - Evidence for your eviction defense

EMERGENCY REPAIRS:
For Class C violations:
• HPD can do emergency repair
• Bill landlord (lien on property)
• Work done within days

HP ACTION (Housing Part):
If landlord doesn't fix violations:
• You can file HP Action in Housing Court
• Court orders landlord to make repairs
• You can get:
  - Rent abatement (reduction)
  - Repairs done
  - Appointment of administrator
  - Attorney fees

How to file HP Action:
1. Go to Housing Court
2. File petition (forms available)
3. Get court date
4. Bring evidence: photos, HPD violations, communications
5. Judge can order repairs

━━━━━━━━━━━━━━━━━━━━━━
DHCR COMPLAINTS
━━━━━━━━━━━━━━━━━━━━━━

WHEN TO FILE WITH DHCR:
✅ Rent overcharge (rent-stabilized)
✅ Illegal rent increase
✅ Landlord won't renew lease (rent-stabilized)
✅ Improper lease terms
✅ Reduction of services
✅ MCI or IAI challenges
✅ Apartment improperly deregulated
✅ Harassment (rent-stabilized)
✅ Subletting disputes

HOW TO FILE:
📞 Call: (718) 739-6400
💻 Online: hcr.ny.gov
✉️ Mail: DHCR Office (address on website)

RENT OVERCHARGE COMPLAINT:
Most common DHCR complaint

Steps:
1. Request rent history from DHCR (free)
2. Compare to what you're paying
3. If higher than legal: file overcharge complaint
4. DHCR investigates
5. If overcharge found:
   - Landlord must refund
   - PLUS triple damages (if willful)
   - Rent adjusted to legal amount

⏰ DEADLINE: Must file within 4 YEARS of overcharge

REDUCTION OF SERVICES:
If landlord reduces/stops services:
• Used to provide laundry, doorman, etc.
• Now stopped or reduced
• File complaint with DHCR
• DHCR can freeze rent until services restored

LEASE RENEWAL COMPLAINT:
If landlord won't give renewal lease (rent-stabilized):
• File complaint
• DHCR will order landlord to renew
• Landlord faces penalties

MCI/IAI CHALLENGES:
If landlord adds MCI or IAI rent increase:
• You can challenge
• Question if work was actually done
• Question if cost is accurate
• File within 35 days of notice

WHAT YOU NEED:
📋 Lease
📋 Rent receipts
📋 Rent history
📋 Communications with landlord
📋 Evidence of issue

DHCR PROCESS:
1. File complaint
2. DHCR sends to landlord
3. Landlord responds
4. DHCR investigates
5. Issues order
6. Can take 6 months - 2 years

APPEALS:
If you disagree with DHCR decision:
• Can file Petition for Administrative Review (PAR)
• Then can appeal to court

━━━━━━━━━━━━━━━━━━━━━━
USING VIOLATIONS IN COURT
━━━━━━━━━━━━━━━━━━━━━━

HPD violations are POWERFUL in eviction defense:
✅ Show landlord's breach of warranty of habitability
✅ Can get rent abatement
✅ Can defeat eviction
✅ Show harassment

Always file HPD complaints for ANY issues!

TIPS:
✅ File complaints in writing (keep records)
✅ Take photos before inspector comes
✅ Be present for inspection if possible
✅ Get copy of violations
✅ Follow up - check if landlord fixed
✅ Keep violation report for court

TRACKING COMPLAINTS:
• Call 311 and ask for complaint number
• Check online: portal.311.nyc.gov
• Check HPD violations: hpdonline.nyc.gov/hpdonline

MULTIPLE COMPLAINTS = PATTERN:
Many complaints show:
• Landlord neglect
• Harassment pattern
• Uninhabitable conditions
• Strong defense against eviction

DON'T BE AFRAID TO COMPLAIN:
• It's your RIGHT
• Retaliation is illegal
• Complaints help your case
• Help future tenants

HELP FILING:
🔹 Call 311 - they'll help you file
🔹 Housing Court Answers: (212) 962-4795
🔹 Legal Aid: (212) 577-3300

Both HPD and DHCR complaints are FREE!
File early and often!`
  },

  // 12. Tenant Organizing
  {
    keywords: ['tenant association', 'tenants association', 'organize', 'organizing', 'tenant union'],
    category: 'Tenant Organizing',
    response: `✊ TENANT ORGANIZING & COLLECTIVE POWER

Organizing with your neighbors is one of the most powerful tools tenants have!

YOUR RIGHT TO ORGANIZE:
✅ Legal right to form tenant association
✅ Protected by NYC and NY State law
✅ Landlord CANNOT retaliate
✅ Cannot evict you for organizing
✅ Cannot harass you for organizing

WHY ORGANIZE:
💪 Strength in numbers
💪 Collective bargaining power
💪 Share information and resources
💪 Fight together for repairs
💪 Stop harassment
💪 Negotiate with landlord
💪 Legal protections
💪 Community support

HOW TO START TENANT ASSOCIATION:

STEP 1: Talk to Neighbors
• Knock on doors
• Introduce yourself
• Ask about their issues
• Gauge interest in organizing

STEP 2: Have Meeting
• Invite all tenants
• Public space or someone's apartment
• Discuss common issues
• Gauge interest

STEP 3: Form Association
• Elect officers (president, secretary, treasurer)
• Create bylaws (simple rules)
• No formal registration required
• Just start meeting!

STEP 4: Build Power
• Hold regular meetings
• Collect member contact info
• Document building problems
• Develop demands
• Plan actions

WHAT TENANT ASSOCIATIONS DO:
✅ Meet with landlord about issues
✅ Coordinate repair requests
✅ File collective HPD complaints
✅ Support members in housing court
✅ Rent strikes (if necessary)
✅ Petition campaigns
✅ Media/press outreach
✅ Connect with other tenant groups
✅ Educate members about rights

LEGAL RECOGNITION:
To get legal recognition:
• Must have 10% of building as members
• File notice with landlord
• Now landlord must negotiate in good faith
• Can bargain collectively

COLLECTIVE BARGAINING:
Once recognized, association can:
• Negotiate with landlord
• Request building-wide improvements
• Discuss rent issues
• Require landlord to meet
• File unfair labor practice complaints

PROTECTION FROM RETALIATION:
Landlord CANNOT:
❌ Evict you for organizing
❌ Raise rent to punish organizers
❌ Harass association members
❌ Refuse to meet with association
❌ Retaliate in any way

If retaliation happens:
• File complaint with DHCR
• Sue in court
• Retaliation is strong defense to eviction

RENT STRIKES:
⚠️ SERIOUS ACTION - Get legal advice first!

When used:
• Landlord refuses major repairs
• Widespread uninhabitable conditions
• Harassment campaign
• Last resort

How to do it:
1. Document all issues
2. Make formal demands
3. Get majority of tenants committed
4. Open escrow account (deposit rent there)
5. File HP Action in court
6. Withhold rent collectively
7. Get legal representation

⚠️ Risks: Can be evicted if done wrong
✅ Power: Very effective if done right

ORGANIZING RESOURCES:
🔹 Met Council on Housing: (212) 979-0611
   - Free organizing support
   - Training and resources
   - Hotline for tenant questions

🔹 Housing Justice for All
   - Statewide tenant organizing
   - Coalition building

🔹 Community Voices Heard: (212) 873-2400
   - Organizing in low-income communities

🔹 Cooper Square Committee: (212) 228-8210
   - Lower East Side organizing

🔹 Crown Heights Tenant Union
   - Neighborhood organizing

TOOLS FOR ORGANIZING:
📱 Tenant Power Toolkit: Website with resources
📋 Door-knock survey templates
📋 Meeting agendas
📋 Demand letters
📋 Petition templates
🗣️ Know Your Rights workshops
📸 Social media campaigns

EFFECTIVE TACTICS:
✅ Door knocking - personal contact
✅ Building meetings
✅ Collective repair requests
✅ Letter-writing campaigns
✅ Petitions to landlord
✅ Media outreach
✅ Protests/rallies
✅ Court support
✅ Building newsletters

BUILDING SOLIDARITY:
• Support neighbors in court
• Share resources
• Multilingual outreach
• Include everyone
• Build trust over time

SUCCESS STORIES:
NYC tenant associations have won:
🏆 Major building repairs
🏆 Stopped harassment campaigns
🏆 Negotiated with landlords
🏆 Prevented displacement
🏆 Improved living conditions
🏆 Building sold to tenant cooperative

TENANT COOPERATIVES:
Ultimate goal for some:
• Tenants buy building together
• Become collective owners
• Control your housing
• Organizations can help: UHAB, HDFC

LEGAL SUPPORT:
Many legal aid organizations support tenant associations:
• Legal Aid Society
• MFY Legal Services
• Legal Services NYC
• Brooklyn A

WORKSHOPS & TRAINING:
Free tenant organizing training:
• Met Council workshops
• Housing Justice for All
• Community organizations
• Legal aid clinics

START SMALL:
��� You don't need everyone at first
• Start with a few committed neighbors
• Build over time
• Small victories build momentum

STAY SAFE:
• Know your rights
• Document everything
• Don't let landlord intimidate you
• Support each other
• Get legal advice for major actions

YOUR POWER:
🗣️ Collective voice
💪 Strength in numbers
⚖️ Legal protections
🏠 Control your housing

Don't face landlord alone - organize with your neighbors!

Contact Met Council: (212) 979-0611
Free organizing help and resources!`
  },

  // 14. Noise, Privacy & Safety
  {
    keywords: ['noise', 'loud', 'quiet enjoyment', 'neighbors', 'privacy', 'landlord entering', 'entry'],
    category: 'Quiet Enjoyment & Privacy',
    response: `🔇 QUIET ENJOYMENT, PRIVACY & SAFETY RIGHTS

You have right to peaceful enjoyment of your home!

RIGHT TO QUIET ENJOYMENT:
Legal concept - landlord cannot:
❌ Interfere with your use of apartment
❌ Allow unsafe conditions
❌ Permit persistent disturbances
❌ Harass you
❌ Create unbearable living conditions

NOISE ISSUES:

From Other Tenants:
1. Talk to neighbor first (if safe)
2. Document: dates, times, type of noise
3. Complain to landlord in writing
4. If chronic: landlord has duty to address
5. Can call 311 for noise complaint
6. Excessive noise = breach of quiet enjoyment

From Landlord/Construction:
• Landlord can make repairs, but:
  - Must give reasonable notice
  - Can't be excessive/harassing
  - Can't be at unreasonable hours
  - Pattern of unnecessary work = harassment

NYC Noise Regulations:
• "Unreasonable noise" illegal (§24-203)
• 10 PM - 7 AM: extra quiet hours
• Can call 311 for noise complaints
• DEP can issue violations

LANDLORD'S RIGHT OF ENTRY:

LANDLORD CAN ENTER:
✅ With "reasonable notice" (usually 24 hours)
✅ At reasonable time (business hours)
✅ For valid reason:
   - Make repairs
   - Show apartment to prospective tenants/buyers
   - Inspect for damage/violations
   - Emergency

LANDLORD CANNOT:
❌ Enter without notice (except emergency)
❌ Enter for harassment
❌ Enter at unreasonable hours
❌ Enter for no valid reason
❌ Enter repeatedly to harass

REASONABLE NOTICE:
• Usually 24 hours advance notice
• Can be verbal or written
• Must state reason for entry
• Must state approximate time

EMERGENCIES:
Landlord can enter without notice if:
• Fire
• Gas leak
• Burst pipe
• Other immediate danger
• Must be real emergency, not excuse

IF LANDLORD ENTERS ILLEGALLY:
1. Document: dates, times, how they entered
2. Get witnesses if possible
3. Change locks (but give landlord copy)
4. Send written complaint to landlord
5. File harassment complaint with HPD (311)
6. Can sue for trespass
7. Can get restraining order

YOUR RIGHT TO CHANGE LOCKS:
✅ You CAN change locks
✅ But must give landlord copy of new key
✅ Landlord cannot charge you for this
✅ Good security practice

BUILDING SECURITY:

Landlord MUST provide:
✅ Working locks on apartment door
✅ Working locks on building entrance
✅ Peephole or viewer in apartment door
✅ Window guards (if child under 11)
✅ Smoke detectors (working)
✅ Carbon monoxide detectors

INADEQUATE SECURITY:
If building has security problems:
• Broken front door lock
• No lighting in halls
• Broken intercom
• No peephole

→ File HPD complaint (311)
→ Request repairs in writing
→ May be able to withhold rent
→ Could be liable if you're harmed

LANDLORD LIABILITY:
Landlord can be liable if:
• Inadequate security
• You're assaulted/robbed
• Landlord knew of security problems
• Didn't fix them
• You're injured as result

CAMERAS & SURVEILLANCE:
• Landlord can have cameras in common areas
• CANNOT have cameras in your apartment
• Cannot record inside apartments
• Must notify tenants of camera locations
• Subject to tenant data privacy law

TENANT DATA PRIVACY LAW:
If building has smart access (key cards, apps, facial recognition):
• Landlord must tell you what data collected
• Must get consent for biometric data
• Limited data retention
• Cannot sell data
• You have right to access your data
• Can request corrections

KEY CARDS & SMART LOCKS:
• Landlord must notify you about data collection
• Can't deny access if you don't consent to extra data
• Basic access data OK, extensive tracking not OK

GUESTS & VISITORS:
✅ You have right to have guests
✅ Landlord cannot unreasonably restrict
✅ Short-term guests OK
✅ Long-term: may become tenant (see roommate law)
✅ Overnight guests allowed

Landlord cannot:
❌ Ban all guests
❌ Require guest registration
❌ Limit guest hours unreasonably
❌ Charge for guests
❌ Question all visitors

DOMESTIC VIOLENCE:
Special protections:
• Can change locks (don't give abuser key)
• Can break lease without penalty
• Protected by Safe Housing Act
• Can get order of protection
• Landlord must make reasonable accommodations

Resources:
• NYC Domestic Violence Hotline: 1-800-621-HOPE
• Safe Horizon: (212) 577-7777

HARASSMENT VIA PRIVACY VIOLATIONS:
Repeated entry without notice = harassment
• File HPD harassment complaint
• Can get restraining order
• Strong defense if landlord tries to evict
• May be able to sue

WHAT TO DO:
1. Know your rights
2. Document violations
3. Complain in writing
4. File HPD complaint if needed
5. Get legal help if harassment continues

SECURITY TIPS:
✅ Change locks when you move in
✅ Get renter's insurance
✅ Don't let strangers in building
✅ Report broken locks immediately
✅ Install additional locks/chains
✅ Document security issues

YOUR HOME = YOUR CASTLE:
You have strong privacy rights. Don't let landlord violate them!

Help:
🔹 HPD Harassment: 311
🔹 Legal Aid: (212) 577-3300
🔹 Tenant Data Privacy: HPD (311)
🔹 Domestic Violence: 1-800-621-HOPE`
  }
];

export function findResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Search through knowledge base
  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return entry.response;
      }
    }
  }
  
  // Default response if no match found
  return `I can help you with many NYC tenant rights topics including:

🏠 **Housing Issues:**
• Illegal lockouts & harassment
• Repairs & living conditions (heat, water, mold, pests, lead paint)
• Rent & lease issues
• Evictions & housing court

💰 **Financial:**
• Rent increases & rent stabilization  
• Security deposits
• Rent relief programs (CityFHEPS, Section 8, etc.)
• SCRIE/DRIE (senior/disability rent freeze)

⚖️ **Legal & Rights:**
• Your rights in housing court
• Right to free attorney
• Discrimination & fair housing
• Tenant organizing
• HPD & DHCR complaints

🔑 **Other Topics:**
• Subletting & roommates
• Quiet enjoyment & privacy
• Building security
• Affordable housing applications

What specific topic would you like to know more about?`;
}
