// Standard warehouse terminology; these definitions do not imply a particular
// integration, matching rule, or automated behavior in a customer configuration.
const po = /\b(p\s*o(?:s)?|purchase orders?)\b/;
const asn = /\b(a\s*s\s*n(?:s)?|advance(?:d)? (?:shipping|shipment) (?:notices?|notifications?))\b/;
export function explainTerminology(question) {
  const text = question.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  const hasPO = po.test(text), hasASN = asn.test(text);
  if (!hasPO && !hasASN) {
    const glossary = [
      [/^(?:(?:what is|what does|explain|define|tell me about) )?(?:a |an |the )?sku(?: mean| stand for)?$/, 'SKU means Stock Keeping Unit: an identifier used to distinguish an item. TK WMS item setup includes SKU descriptions, categories, and units of measure.', '/operations/setup.html', 'Warehouse & item setup'],
      [/^(?:(?:what is|what does|explain|define|tell me about) )?(?:a |an |the )?uom(?: mean| stand for)?$/, 'UOM means Unit of Measure: the unit used to describe an item quantity, such as each, case, or pallet. TK WMS item setup includes units of measure; particular conversions depend on the item setup.', '/operations/setup.html', 'Warehouse & item setup'],
      [/^(?:(?:what is|what does|explain|define|tell me about) )?(?:a |an |the )?rf(?: mean| stand for)?$/, 'RF means Radio Frequency. In a warehouse context, RF commonly refers to handheld-device workflows. TK WMS includes RF Menu configuration for worker-facing handheld menu paths.', '/platform/workflow.html', 'Workflow, screens & RF'],
      [/^(?:(?:what is|what does|explain|define|tell me about) )?(?:a |an |the )?bom(?: mean| stand for)?$/, 'BOM means Bill of Material: the component list used to define a kit or assembly. TK WMS includes bills of material alongside assembly and disassembly work orders.', '/operations/kitting.html', 'Kitting & assembly']
    ];
    const entry = glossary.find(([pattern]) => pattern.test(text));
    return entry ? {kind:'answer',answer:entry[1],url:entry[2],label:entry[3]} : null;
  }
  const url='/operations/purchase-orders-asns.html', label='Purchase orders, ASNs & receiving';
  if (/\b(my|our|today|current\w*|status|password|credentials?|lookup|look up)\b|\b(?:po|asn|order|shipment)\s*\d/.test(text)) return {kind:'fallback',answer:'Sorry, I can explain purchase orders and ASNs, but I can’t look up live documents or their status.',url,label};
  if (/\b(fifo|sap|edi|api|integrat\w*|automat\w*|exact\w*|errors?|fail\w*|delete|create|change|update|configure|set up|step by step)\b/.test(text)) return {kind:'fallback',answer:'I can explain what POs and ASNs mean, but the website doesn’t document that specific setup or behavior. This receiving guide explains the concepts.',url,label};
  let answer;
  if (hasPO && hasASN) answer='PO means Purchase Order: the buyer’s order to a supplier, describing the items and quantities requested. ASN means Advance Shipping Notice: information sent before a delivery describing what is expected to arrive.\n\nThe difference: a PO describes what was ordered; an ASN describes an upcoming shipment; receiving records what actually arrived. A shipment may cover only part of a PO, and one PO may be delivered in multiple shipments.\n\nFor example, a PO could request 100 units, while an ASN announces a delivery of 60. Receiving then checks the actual delivery against the expected shipment. This is a general example, not a live TK WMS record. TK WMS’s documented receiving, inspection, and putaway workflows provide the surrounding inbound context.';
  else if (hasPO) answer='PO stands for Purchase Order. It is the buyer’s order to a supplier, describing items and quantities requested. In warehouse terms, it provides the purchasing context for an incoming delivery.\n\nA PO is different from an ASN, which announces a shipment, and a receipt, which records what actually arrived. A single PO may be delivered in more than one shipment. TK WMS’s receiving guide explains the related inbound workflow.';
  else answer='ASN stands for Advance Shipping Notice, also called an Advance Shipment Notice. It is information sent before a delivery describing the shipment expected to arrive. It can describe expected items and quantities; the exact contents depend on the sender and setup.\n\nAn ASN is not proof that goods have been received. Receiving checks what actually arrives. Unlike a PO, which describes what was ordered, an ASN describes an upcoming shipment.';
  return {kind:'answer',answer,url,label};
}
