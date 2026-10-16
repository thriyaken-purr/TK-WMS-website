// Generated from the public TK WMS guides by scripts/generate-ella-knowledge.mjs.
export default [
  {
    "url": "/operations/counts.html",
    "title": "Cycle counting",
    "sections": [
      {
        "heading": "Organize what will be counted",
        "text": "Count plans provide a structure for selected inventory or locations. They define the scope from which count work is carried out, rather than serving as a read-only inventory quantity view. Planning belongs at the beginning of the verification process."
      },
      {
        "heading": "Track the count activity",
        "text": "Count tasks represent the work to be performed. TK WMS includes assignment, due status, and completion tracking in the wider warehouse task workflow. This gives users a way to follow count activity in addition to reviewing stock records."
      },
      {
        "heading": "Review the differences",
        "text": "Variance review brings count differences forward for follow-up. Count and performance views provide open-count and accuracy-related visibility. A discrepancy needs review in context; the presence of a physical count is separate from the authorized process used to resolve an inventory record."
      }
    ]
  },
  {
    "url": "/operations/crossdock.html",
    "title": "Cross-docking",
    "sections": [
      {
        "heading": "Start with the inbound-outbound relationship",
        "text": "Cross-docking focuses on eligible incoming product and the outbound demand associated with it. The relevant question is how those flows are coordinated, rather than only where received stock should be stored."
      },
      {
        "heading": "Use a dedicated workspace",
        "text": "TK WMS exposes a Cross-Dock Workbench for reviewing and coordinating this activity. The workbench is a distinct operational area, separate from general location setup and inventory inquiries. Available work depends on the configured process and eligible goods."
      },
      {
        "heading": "Keep adjacent processes in view",
        "text": "Receiving and outbound fulfillment remain separate capabilities around cross-dock activity. Appointment and receipt views provide inbound context; order, picking, and shipping capabilities provide outbound context. Cross-docking addresses their relationship without replacing the rest of warehouse execution."
      }
    ]
  },
  {
    "url": "/operations/inbound.html",
    "title": "Receiving & putaway",
    "sections": [
      {
        "heading": "Review what is arriving",
        "text": "Appointment and yard menus provide context around incoming activity. Receipt status is reviewed separately as goods enter receiving work. This distinction helps an inbound team focus on the stage being handled instead of treating an expected arrival as a completed receipt."
      },
      {
        "heading": "Process the receipt and its checks",
        "text": "Receiving, returns, inspections, and labels are represented as inbound workflows. The appropriate path depends on warehouse configuration and the work being processed. These tools support review and handling at the receiving stage before goods continue through the operation."
      },
      {
        "heading": "Follow work awaiting putaway",
        "text": "Putaway moves received goods toward warehouse storage. Suggested-location configuration belongs to the platform’s rules area, while putaway work belongs to execution. Inbound Performance and Putaway dashboards help users review incoming activity and receipts waiting for follow-up."
      }
    ]
  },
  {
    "url": "/operations/inventory.html",
    "title": "Inventory & LPN control",
    "sections": [
      {
        "heading": "Filter the inventory view",
        "text": "The Inventory Workbench shows stock by warehouse, item, and location, with on-hand and allocated quantities. Filters include held and zero-quantity inventory. Multi-select actions are available for supported work; the actions exposed depend on configuration and access."
      },
      {
        "heading": "Choose the correct stock action",
        "text": "Adjustments correct inventory records. LPN moves change where a handling unit is stored. Holds and releases address the status of a handling unit. These are distinct workflows, so reviewing inventory does not itself imply that stock has been moved, adjusted, or released."
      },
      {
        "heading": "Investigate serial and recall activity",
        "text": "Serial-tracking inquiries provide a way to investigate serialized stock. Recall menus address inventory associated with a recall process. Reservation controls and attribute profiles are separate configuration concerns that influence how stock can be selected for demand."
      }
    ]
  },
  {
    "url": "/operations/kitting.html",
    "title": "Kitting & assembly",
    "sections": [
      {
        "heading": "Define the kit structure",
        "text": "Bills of material describe the components used by a kit. TK WMS maintains these records for reference by kitting work orders. A kit definition is setup data; it is separate from the production work carried out against it."
      },
      {
        "heading": "Follow assembly and disassembly",
        "text": "Work orders represent planned assembly or disassembly activity. Configured production stations provide the places where the work is performed. TK WMS includes both directions of work rather than presenting kitting only as a description of a finished item."
      },
      {
        "heading": "Monitor work in progress",
        "text": "Production monitoring supports review of work-order progress and station activity. This lets teams follow in-process work through completion using the kitting area. The exact workflow and available actions depend on the warehouse configuration and the user’s role."
      }
    ]
  },
  {
    "url": "/operations/outbound.html",
    "title": "Picking, packing & shipping",
    "sections": [
      {
        "heading": "Organize demand into work",
        "text": "Order menus, wave planning, and allocation cover the planning side of fulfillment. These stages establish the context for picking work. Which options users can apply depends on configured processes and permissions rather than on the public product website."
      },
      {
        "heading": "Follow physical fulfillment",
        "text": "Picking leads into packing verification and cartonization in supported workflows. Shipment grouping and audits provide additional stages before carrier shipping. TK WMS describes these as separate operational capabilities, allowing teams to review the part of the process relevant to their work."
      },
      {
        "heading": "Review shipment activity",
        "text": "Shipment queries provide lookup paths after or during fulfillment review. Picking, Allocation, Consolidation, and Picking Performance dashboards offer broader functional views. Use an inquiry for a specific record and a dashboard for a wider view of an outbound area."
      }
    ]
  },
  {
    "url": "/operations/purchase-orders-asns.html",
    "title": "Purchase orders, ASNs & receiving",
    "sections": [
      {
        "heading": "PO: the purchasing request",
        "text": "A purchase order is the buyer’s order to a supplier. It describes the items and quantities requested and may include other purchasing details. For the warehouse, the PO provides context about what was ordered; it does not by itself confirm that a delivery has arrived."
      },
      {
        "heading": "ASN: the expected shipment",
        "text": "An Advance Shipping Notice, also called an Advance Shipment Notice, describes an upcoming delivery before it arrives. It can include expected items and quantities, with exact contents depending on the sender and setup. The ASN describes a shipment, which may contain only part of an order."
      },
      {
        "heading": "Receipt: the actual arrival",
        "text": "Receiving records the goods that actually arrive. This is distinct from both the purchasing request and the shipment announcement. Checking an actual delivery against what was expected helps identify differences that need review, such as a short delivery or an unexpected quantity."
      },
      {
        "heading": "How the documents relate",
        "text": "A single purchase order may be fulfilled through multiple shipments. For example, a PO might request 100 units while an ASN describes an initial shipment of 60. Receiving establishes what actually arrived in that delivery. This example illustrates the concepts; it does not describe a live TK WMS order or a particular matching configuration."
      },
      {
        "heading": "Where this fits in TK WMS",
        "text": "The documented TK WMS inbound areas include appointments, yard activity, receipt processing, inspections, returns, labels, and putaway. These workflows provide the surrounding operational context. Specific PO-to-ASN matching rules, integrations, document creation steps, and automatic actions depend on the implemented setup and are not specified in this public guide."
      }
    ]
  },
  {
    "url": "/operations/replenishment.html",
    "title": "Replenishment & tasks",
    "sections": [
      {
        "heading": "Maintain the method separately",
        "text": "Replenishment methods define the available configured approach. Method maintenance is setup work, distinct from the requests operators review and execute. This separation lets teams distinguish a configuration question from an individual replenishment movement."
      },
      {
        "heading": "Review request priority and status",
        "text": "Replenishment requests show the movement needed to support forward-pick work alongside priority and status. Reviewing requests helps users identify the work needing attention before following it through the task queue."
      },
      {
        "heading": "Follow assignment and exceptions",
        "text": "Task queues organize work by type and status and show assignment and progress. Overview and task dashboards bring attention to areas such as replenishment requests, past-due picks, receipts awaiting putaway, and open count tasks. These views support operational follow-up across work types."
      }
    ]
  },
  {
    "url": "/operations/setup.html",
    "title": "Warehouse & item setup",
    "sections": [
      {
        "heading": "Define items and handling context",
        "text": "Item setup covers SKU descriptions, categories, and units of measure. LPN and carton definitions describe handling context. These records provide reference information for operational work rather than representing an individual receipt or order."
      },
      {
        "heading": "Organize the warehouse layout",
        "text": "Locations, aisles, zones, layouts, and pick routes describe the warehouse structure. Suggested Location Rules belong to a separate configuration area that can use location context in supported workflows. Defining a location and configuring a location suggestion are different tasks."
      },
      {
        "heading": "Maintain trading and shipping references",
        "text": "Supplier, customer, and carrier records provide additional master-data context. Warehouse and business-unit administration establishes the broader setup. Users need the appropriate access for maintenance, with available menus governed by their role and configuration."
      }
    ]
  },
  {
    "url": "/platform/ai-development.html",
    "title": "Built with AI",
    "sections": [
      {
        "heading": "Turn an idea into a clear request",
        "text": "TK WMS was built using AI. The starting point for an implementation request is the intended warehouse behavior: who is doing the work, what information matters, and what should change in the resulting experience."
      },
      {
        "heading": "Review the result against the workflow",
        "text": "An AI-assisted change needs a concrete point of comparison. The receiving, inventory, fulfillment, or configuration task provides that context. Feedback on terminology, navigation, and behavior can then guide the next iteration rather than repeating the initial request."
      },
      {
        "heading": "Keep the product guide aligned",
        "text": "The public website is maintained in GitHub and published through Vercel. Reviewed changes to explanations, navigation, and Ella’s saved knowledge can be published at the same address. That lets the product story evolve as the team clarifies the WMS."
      },
      {
        "heading": "Keep development and execution distinct",
        "text": "AI’s role in creating TK WMS does not establish how an individual warehouse decision is made. Strategy definitions, business rules, and workflow configuration describe the documented controls; the voice guide explains the separate interaction story."
      }
    ]
  },
  {
    "url": "/platform/implementation.html",
    "title": "Implementation, access & training",
    "sections": [
      {
        "heading": "Use the right designer for the output",
        "text": "Report, Label, and Interface Designers serve distinct purposes: maintaining report layouts, warehouse labels, and system-interface definitions. Screen Designer is a separate tool for worker-facing workflows. Keeping these tools distinct helps clarify what kind of configuration is being maintained."
      },
      {
        "heading": "Review data and integration tools",
        "text": "Integration Sync provides synchronization-related review, while import/export utilities support configured data workflows. The API playground provides an API-oriented work area. These tools are described as available implementation capabilities, without promising a particular third-party integration."
      },
      {
        "heading": "Maintain access and support learning",
        "text": "Administration includes warehouses, business units, users, roles, access permissions, and menu availability. Training Phases 1–6 provide staged product learning. Together these areas support who can use the application, the context they work in, and how they learn the configured workflows."
      }
    ]
  },
  {
    "url": "/platform/rules.html",
    "title": "Business rules & policies",
    "sections": [
      {
        "heading": "Start with business-rule setup",
        "text": "TK WMS includes Business Rules Assistant setup as part of its configuration surface. This area is associated with the policies and rules guiding warehouse processes. It is intended for authorized configuration work, separate from daily task execution."
      },
      {
        "heading": "Maintain the outcome side of a rule",
        "text": "Rule Actions provide the action side of configured business-rule behavior. Rules and actions should be reviewed in the context of the supported warehouse process. The public guide explains their purpose without exposing warehouse-specific rule values."
      },
      {
        "heading": "Distinguish policy from screen design",
        "text": "Workflow Policies relate to execution policy. Screen Designer and Workflow Designer address the worker-facing process and structure. Policy setup and screen configuration are connected concerns, but they are maintained through different tools and should not be treated as interchangeable."
      }
    ]
  },
  {
    "url": "/platform/strategy.html",
    "title": "Strategy & reservation controls",
    "sections": [
      {
        "heading": "Maintain strategy definitions",
        "text": "The Strategy Engine gives authorized teams a central place for strategies used by configured warehouse processes. Its purpose is definition and maintenance, distinct from transaction execution. Reviewing a strategy is therefore different from reviewing a task awaiting an operator."
      },
      {
        "heading": "Connect definitions with actions",
        "text": "Strategy actions describe the configured behavior associated with decision paths. Suggested Location Rules separately guide location suggestions in supported workflows. These tools connect process setup with warehouse execution without making every decision part of a single screen."
      },
      {
        "heading": "Configure stock-selection attributes",
        "text": "Reservation Attribute Profiles define attributes used by reservation controls. They address how stock can be selected for demand, while location rules address suggested warehouse locations. Reviewing both areas helps clarify which decision a configuration change is intended to affect."
      }
    ]
  },
  {
    "url": "/platform/visibility.html",
    "title": "Dashboards & operational queries",
    "sections": [
      {
        "heading": "Review warehouse functions",
        "text": "Named dashboards include Putaway, Picking, Allocation, Replenishment, Inbound Performance, Task Activity, Consolidation, and Picking Performance. Each provides a functional view rather than assuming one dashboard answers every operational question."
      },
      {
        "heading": "Investigate individual records",
        "text": "Shipment, inventory, receipt, and transaction queries provide lookup paths for specific records and history. Serial-tracking and user-activity inquiries serve additional traceability needs. An inquiry is a different tool from a functional performance view."
      },
      {
        "heading": "Connect overview with follow-up",
        "text": "Review an area-level dashboard when work needs attention, then choose an inquiry appropriate to the record being investigated. Available data and menus depend on authorization and warehouse configuration. The public website and Ella do not expose these operational records."
      }
    ]
  },
  {
    "url": "/platform/voice.html",
    "title": "Voice & recording",
    "sections": [
      {
        "heading": "Start with the interaction",
        "text": "Voice recording is part of TK WMS. Its place in the product is alongside the screens and menus that present warehouse work. Understanding the intended task provides the starting point for reviewing that interaction."
      },
      {
        "heading": "Know what each tool contributes",
        "text": "Screen Designer concerns presentation; Workflow Designer concerns process structure; RF Menus organize handheld navigation. Voice-related options add a further interaction area within the documented configuration."
      },
      {
        "heading": "Distinguish capture from confirmation",
        "text": "A recording captures a voice input. A warehouse confirmation records a completed process step. They should be interpreted in the context of the implemented workflow; the public documentation does not specify automatic transcription or command execution."
      }
    ]
  },
  {
    "url": "/platform/workflow.html",
    "title": "Workflow, screens & RF",
    "sections": [
      {
        "heading": "Configure what a worker sees",
        "text": "Screen Designer provides configuration for supported warehouse workflow screens and the information presented during tasks. This is a worker-experience tool, distinct from report layout design and from the public website’s navigation."
      },
      {
        "heading": "Maintain the structure around the work",
        "text": "Workflow Designer addresses process structure, while Workflow Policies address the associated policy setup. Reviewing these areas together helps teams understand the relationship between workflow steps and the rules governing supported execution."
      },
      {
        "heading": "Organize handheld and voice options",
        "text": "RF Menus maintain handheld radio-frequency menu paths for warehouse workers. Voice-related options are also represented in TK WMS configuration. These areas belong to the warehouse application, with feature availability dependent on the configured worker experience and access."
      }
    ]
  }
];
