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
        "heading": "Describe the work first",
        "text": "TK WMS was built using AI as part of the development process. The starting point is the warehouse experience: the screens, workflows, and controls the product needs to represent. Giving those needs a clear description provides direction for the implementation work that follows."
      },
      {
        "heading": "Use conversation to shape the product",
        "text": "An AI-assisted approach makes plain-language requests part of software development. A feature idea, a layout correction, or a clearer explanation can become a concrete change to review. This public website has evolved in the same way: requests become changes, checks, and published updates."
      },
      {
        "heading": "Keep the warehouse model at the center",
        "text": "The product still needs to make sense as a WMS. Receiving, inventory, fulfillment, task work, rules, and configuration provide the structure around the interface. AI contributes to building the product; those operational concepts define what the product is for."
      },
      {
        "heading": "Refine what people actually use",
        "text": "The work continues after the first implementation. Corrections to navigation, terminology, page content, and feature explanations help keep the experience aligned with the intended warehouse workflows. The public website and its product guide can be refined alongside that understanding."
      },
      {
        "heading": "Turn requests into implementation changes",
        "text": "AI-assisted coding is part of the development approach behind TK WMS. A useful request describes the intended behavior, the warehouse context, and what needs to change. The resulting implementation can then be reviewed against that request, with corrections feeding into the next iteration."
      },
      {
        "heading": "Publish the product story as it evolves",
        "text": "The TK WMS public website uses GitHub to track its code and Vercel to publish updates. Changes to pages, navigation, and Ella’s saved product answers can be committed and published at the same address, keeping the public guide adaptable as the product story becomes more detailed."
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
        "heading": "Bring voice into the product conversation",
        "text": "Voice recording is part of TK WMS. Voice is part of how the product’s interaction story is being developed, alongside the screens and menus used to present warehouse work."
      },
      {
        "heading": "Understand the surrounding workflow tools",
        "text": "The documented TK WMS configuration areas include Screen Designer, Workflow Designer, Workflow Policies, RF Menus, and voice-related options. These are different parts of the worker-facing experience: screen presentation, process structure, handheld navigation, and voice configuration."
      },
      {
        "heading": "Keep recording and execution distinct",
        "text": "Recording a voice input and completing warehouse work are separate activities. A recording on its own should not be understood as confirmation that inventory moved, an order shipped, or a task finished. The meaning of a voice interaction depends on the workflow in which it is used."
      },
      {
        "heading": "Review voice in its warehouse context",
        "text": "When exploring a voice-enabled experience, start with the task and the user’s role. Then review the available screen, RF, and voice options for that configured workflow. The workflow guide explains the surrounding design tools; the operations guides explain the warehouse work itself."
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
