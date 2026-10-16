// Saved public product information only. No network calls or live WMS access.
const topics = [
  ['ai', /\b(ai|artificial intelligence|built|development)\b/, 'Built with AI', '/platform/ai-development.html', 'TK WMS was built using AI as part of its development process. Plain-language ideas and feedback help shape implementation changes that can be reviewed and refined. The AI development story is separate from Ella, who uses saved product replies on this website.'],
  ['voice', /\b(voice|recording|recordings|speech)\b/, 'Voice & recording', '/platform/voice.html', 'Voice recording is part of the TK WMS product story, alongside voice-related options in workflow configuration. The voice guide explains its relationship to the screens, workflows, and RF menus used to present warehouse work.'],
  ['inbound', /\b(receiv\w*|receipts?|inbound|putaway|put away|appointments?|yard|inspections?|returns?)\b/, 'Receiving & putaway', '/operations/inbound.html', 'TK WMS includes appointments, yard activity, receiving, inspections, returns, labels, and putaway. Inbound and Putaway views help teams review incoming work and receipts awaiting follow-up.'],
  ['inventory', /\b(inventory|stock|lpns?|license plate|serial\w*|recalls?|holds?|adjust\w*)\b/, 'Inventory & LPN control', '/operations/inventory.html', 'The Inventory Workbench lets authorized users review stock by warehouse, item, and location, including on-hand and allocated quantities. Separate workflows cover adjustments, LPN moves, holds, serial tracking, and recalls.'],
  ['outbound', /\b(outbound|orders?|waves?|allocat\w*|pick\w*|pack\w*|ship\w*|cartoni\w*|carriers?)\b/, 'Picking, packing & shipping', '/operations/outbound.html', 'TK WMS covers order work, wave planning, allocation, picking, packing verification, cartonization, shipment grouping, audits, and carrier shipping. Shipment queries provide a way to investigate individual shipment records.'],
  ['replenishment', /\b(replenish\w*|tasks?|task queues?|priorit\w*|assign\w*)\b/, 'Replenishment & tasks', '/operations/replenishment.html', 'TK WMS separates replenishment-method setup from the requests operators work. Requests show priority, status, and the required movement. Task queues help teams follow work type, assignment, and progress.'],
  ['counts', /\b(cycle counts?|count\w*|variances?|discrepanc\w*)\b/, 'Cycle counting', '/operations/counts.html', 'TK WMS includes count plans, count tasks, and variance review. Teams can organize physical count work, track its completion, and review differences between counted and recorded inventory.'],
  ['kitting', /\b(kits?|kitting|assembly|disassembly|bills? of materials?|bom|production|stations?)\b/, 'Kitting & assembly', '/operations/kitting.html', 'TK WMS supports kit bills of material, assembly and disassembly work orders, configured production stations, and production monitoring. These tools connect kit component definitions with planned work and progress review.'],
  ['crossdock', /\b(cross dock\w*|crossdock\w*)\b/, 'Cross-docking', '/operations/crossdock.html', 'The dedicated Cross-Dock Workbench helps users review and coordinate eligible incoming goods with outbound demand. It focuses on flow-through handling rather than general storage setup.'],
  ['strategy', /\b(strateg\w*|suggested locations?|location rules?|reserv\w*)\b/, 'Strategy & reservation controls', '/platform/strategy.html', 'The Strategy Engine maintains strategies and associated actions for configured warehouse processes. Suggested Location Rules guide location suggestions; Reservation Attribute Profiles define attributes used by reservation controls.'],
  ['rules', /\b(business rules?|rule actions?|polic\w*|profiles?)\b/, 'Business rules & policies', '/platform/rules.html', 'TK WMS includes Business Rules Assistant setup, Rule Actions, and Workflow Policies. Authorized teams use these configuration areas to maintain rules, their associated actions, and supported workflow policies.'],
  ['workflow', /\b(workflows?|screen\w*|rf|radio frequency|handheld\w*|voice)\b/, 'Workflow, screens & RF', '/platform/workflow.html', 'Screen Designer configures supported workflow screens, while Workflow Designer addresses process structure. RF Menus maintain handheld menu paths, and voice-related options are also represented in configuration.'],
  ['visibility', /\b(dashboards?|quer\w*|visibility|performance|history|inquir\w*|monitor\w*|analytics)\b/, 'Dashboards & operational queries', '/platform/visibility.html', 'TK WMS has dashboards for Putaway, Picking, Allocation, Replenishment, Inbound Performance, Task Activity, Consolidation, and Picking Performance. Separate queries cover shipments, inventory, receipts, transactions, serial tracking, and user activity.'],
  ['implementation', /\b(reports?|labels?|interfaces?|integrat\w*|sync\w*|imports?|exports?|apis?|administrat\w*|users?|roles?|access|permissions?|training|learn\w*)\b/, 'Implementation, access & training', '/platform/implementation.html', 'TK WMS includes Report, Label, and Interface Designers, Integration Sync, import/export utilities, and an API playground. Administration covers warehouses, business units, users, roles, permissions, and menus. Training Phases 1–6 organize product learning.'],
  ['setup', /\b(master data|item\w*|sku\w*|locations?|aisles?|zones?|layouts?|suppliers?|customers?|cartons?|pick routes?|setup)\b/, 'Warehouse & item setup', '/operations/setup.html', 'TK WMS setup includes item definitions, units of measure, locations, aisles, zones, layouts, LPN and carton definitions, suppliers, customers, carriers, and pick routes. These records provide context for warehouse work.']
];
const normalize = text => text.toLowerCase().normalize('NFKC').replace(/[’']/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const common = new Set(('a an the is are was be been being what whats which who why how does do can could will would should may i me my we our you your it its this that these those tk wms warehouse warehouses management system software feature features capability capabilities has have having offer offers include includes included support supports supported help helps with for in on of to from by at and or about tell explain please basic basics simple describe description overview work works working used use uses using build built development let lets able allow allows manage manages managing see view review show track tracking handle handles do available there any some such as yes no mean means place release move moving through into stock stocks control controls configure configuration settings configured process processes tools tool information way ways follow following need needs details detail more give know data find record records status statuses based per quantity quantities current recorded recorded guide guide menu menus question questions regarding regarding provide provides general purpose').split(/\s+/));
function fallback(topic, live = false) {
  return {
    kind: 'fallback',
    answer: live ? 'Sorry, I can’t check live stock, orders, or warehouse records. I can explain TK WMS features using this website’s product guide.' : 'Sorry, I can’t answer that exactly. I can help with basic TK WMS feature questions. This guide is a good place to look for more detail.',
    url: topic?.[3] || '/solutions.html', label: topic?.[2] || 'TK WMS solutions'
  };
}
export function answerBasicElla(question) {
  const text = normalize(String(question ?? '').slice(0, 500));
  if (!text) return null;
  if (/^(hi|hello|hey)( ella)?$/.test(text)) return {kind:'greeting', answer:'Hi! Ask me a basic question about TK WMS, such as what the Inventory Workbench shows or what the Strategy Engine does.'};
  if (/^(thanks|thank you|thanks ella|thank you ella)$/.test(text)) return {kind:'greeting',answer:'You’re welcome! I’m here for basic questions about TK WMS.'};
  const matches = topics.filter(topic => topic[1].test(text));
  // Specific phrases take precedence over incidental references to stock, tasks, or screens.
  const priority = [
    ['voice', /\b(voice|recording|recordings|speech)\b/],
    ['visibility', /\b(dashboards?|quer\w*|performance|inquir\w*)\b/],
    ['strategy', /\b(strateg\w*|suggested locations?|location rules?|reservation attribute)\b/],
    ['rules', /\b(business rules?|rule actions?|workflow polic\w*)\b/],
    ['counts', /\b(cycle counts?|count plans?|count tasks?|variances?)\b/],
    ['crossdock', /\b(cross dock\w*|crossdock\w*)\b/],
    ['setup', /\b(master data|pick routes?)\b/]
  ].find(([, pattern]) => pattern.test(text));
  const topic = priority ? topics.find(t => t[0] === priority[0]) : matches[0];
  const live = /\b(my|our) (stock|inventory|orders?|shipments?|warehouse records)\b|\b(today|right now|currently|password|credentials?)\b|\b(how many|how much) (stock|inventory|orders?|units?)\b|\b(order|shipment|sku)\s+\d/.test(text);
  if (live) return fallback(topic, true);
  const complex = text.split(' ').length > 28 || /\b(step by step|exact\w*|troubleshoot\w*|debug\w*|errors?|fail\w*|pricing|prices?|costs?|fees?|certif\w*|compliance|guarantee\w*|compare|versus|better|integrate with|connect to|code|scripts?|sql|delete|update|change|create|reset)\b/.test(text) || /\bhow (do|can|should|would) (i|we) (set|configure|implement|build|install|enable|disable|fix)\b/.test(text);
  if (complex) return fallback(topic);
  if (/^(what is (a |the )?(tk )?wms|what does tk wms (do|offer|include)|tell me about tk wms|what is tk wms used for)\s*$/.test(text)) return {kind:'answer',answer:'TK WMS brings together receiving, putaway, inventory control, replenishment, picking, packing, shipping, counting, and kitting, alongside strategy, rules, and workflow configuration tools.',url:'/solutions.html',label:'TK WMS solutions'};
  if (/\bella\b/.test(text) && /\b(do|help|answer|check)\b/.test(text)) return {kind:'answer',answer:'I can explain the basic TK WMS features described on this website. I use saved answers and can’t access live warehouse records or perform actions in the WMS.',url:'/solutions.html',label:'TK WMS solutions'};
  if (!topic) return fallback();
  const known = new Set(normalize(topic[2] + ' ' + topic[4] + ' ' + topic[1].source).split(' '));
  const unknown = text.split(' ').filter(word => !common.has(word) && !known.has(word) && !topic[1].test(word));
  if (unknown.length || (matches.length > 1 && !priority)) return fallback(topic);
  let answer = topic[4];
  if (/^(what is|what does|explain|tell me about) (an? |the )?lpn(?: mean)?$/.test(text)) answer = 'An LPN is a license plate number: an identifier for a handling unit, such as a pallet or carton. TK WMS includes LPN moves, holds, and inventory review tools.';
  else if (/^(what is|explain) put ?away$/.test(text)) answer = 'Putaway is moving received goods into warehouse storage locations. TK WMS includes putaway workflows and separate Suggested Location Rules for location suggestions in supported processes.';
  else if (/^(what is|explain) picking$/.test(text)) answer = 'Picking means collecting the items needed for an order. In TK WMS, it sits within an outbound workflow that includes wave planning, allocation, packing, and shipping.';
  return {kind:'answer',answer,url:topic[3],label:topic[2]};
}
