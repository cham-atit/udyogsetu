export const INITIAL_BUSINESS = {
  name: "Sahyadri Foods Pvt. Ltd.",
  brandName: "Sahyadri Organics",
  category: "Food Processing & Agro-Industry",
  subCategory: "Fruit & Vegetable Processing Unit",
  district: "Pune",
  taluka: "Haveli",
  industrialArea: "Chakan MIDC Phase II",
  plotNumber: "Plot No. A-45/2",
  investmentAmount: 50000000, // 5 Crore
  investmentCategory: "MSME - Medium Enterprise",
  employeeCount: 50,
  projectStage: "Installation & Construction",
  landAreaSqFt: 45000,
  builtUpAreaSqFt: 22000,
  powerReqKW: 350,
  waterReqKLPD: 40,
  pan: "AACCS1234F",
  gstin: "27AACCS1234F1Z5",
  cin: "U15130PN2024PTC228910",
  promoterName: "Rajesh Sharma",
  mobile: "+91 98220 12345",
  email: "entrepreneur@udyogsetu.demo",
  address: "Plot A-45/2, Chakan Industrial Area Phase II, Taluka Haveli, District Pune - 410501, Maharashtra",
  dateOfRegistration: "2024-02-15"
};

export const DEMO_APPROVALS = [
  {
    id: "APP-01",
    name: "Industrial Land Allotment & NOC",
    department: "Maharashtra Industrial Development Corporation (MIDC)",
    simpleName: "Industrial Land Permission",
    simpleDescription: "Official permission to acquire and use land inside MIDC industrial estate.",
    category: "Land & Infrastructure",
    status: "completed",
    mandatory: true,
    whyApplies: "Required because project is situated within MIDC Chakan Phase II.",
    statutoryDays: 30,
    elapsedDays: 22,
    completionDate: "2024-03-10",
    dependencies: [],
    requiredDocs: ["DOC-01", "DOC-02"],
    fee: "₹25,000"
  },
  {
    id: "APP-02",
    name: "Consent to Establish (CTE)",
    department: "Maharashtra Pollution Control Board (MPCB)",
    simpleName: "Pollution Clearance (Initial)",
    simpleDescription: "Permission required before starting site work for industrial activities.",
    category: "Environment & Safety",
    status: "action-required",
    mandatory: true,
    whyApplies: "Food processing with effluent discharge falls under Orange Category industry.",
    statutoryDays: 45,
    elapsedDays: 28,
    dependencies: ["APP-01"],
    requiredDocs: ["DOC-02", "DOC-05", "DOC-08"],
    fee: "₹45,000"
  },
  {
    id: "APP-03",
    name: "Provisional Fire NOC",
    department: "Directorate of Maharashtra Fire Services",
    simpleName: "Fire Safety Approval (Construction)",
    simpleDescription: "Approval of building fire safety layout before building factory.",
    category: "Safety & Building",
    status: "in-progress",
    mandatory: true,
    whyApplies: "Industrial building with plot area exceeding 500 sq. meters.",
    statutoryDays: 30,
    elapsedDays: 19,
    dependencies: ["APP-01"],
    requiredDocs: ["DOC-03", "DOC-04"],
    fee: "₹15,000"
  },
  {
    id: "APP-04",
    name: "Factory Building Plan Sanction",
    department: "Town & Country Planning / MIDC Engineering",
    simpleName: "Building Design Plan Approval",
    simpleDescription: "Official sanction of industrial structural and architectural layouts.",
    category: "Building",
    status: "completed",
    mandatory: true,
    whyApplies: "New factory construction requires structural layout verification.",
    statutoryDays: 30,
    elapsedDays: 25,
    completionDate: "2024-04-12",
    dependencies: ["APP-01"],
    requiredDocs: ["DOC-03"],
    fee: "₹35,000"
  },
  {
    id: "APP-05",
    name: "High Tension Electrical Load Sanction",
    department: "MSEDCL (Maharashtra State Electricity Distribution Co. Ltd.)",
    simpleName: "Power Connection Sanction (350 KW)",
    simpleDescription: "Approval for high voltage industrial electrical connection.",
    category: "Utilities",
    status: "in-progress",
    mandatory: true,
    whyApplies: "Connected power demand exceeds 100 KW threshold.",
    statutoryDays: 21,
    elapsedDays: 14,
    dependencies: ["APP-04"],
    requiredDocs: ["DOC-01", "DOC-03"],
    fee: "₹60,000"
  },
  {
    id: "APP-06",
    name: "FSSAI Central Manufacturing License",
    department: "Food Safety and Standards Authority of India",
    simpleName: "Food Business Operation License",
    simpleDescription: "Mandatory food safety license for food production & processing.",
    category: "Sector Specific",
    status: "waiting-dependency",
    mandatory: true,
    whyApplies: "Turnover & investment criteria for commercial food processing unit.",
    statutoryDays: 60,
    elapsedDays: 0,
    dependencies: ["APP-02", "APP-04"],
    requiredDocs: ["DOC-05", "DOC-06", "DOC-07"],
    fee: "₹7,500"
  },
  {
    id: "APP-07",
    name: "Factory Registration & License",
    department: "Directorate of Industrial Safety & Health (DISH)",
    simpleName: "Factory Operational Safety License",
    simpleDescription: "Registration under Factories Act for worker safety & machine installation.",
    category: "Labour & Safety",
    status: "waiting-dependency",
    mandatory: true,
    whyApplies: "Factory employing 10+ workers with electric power usage.",
    statutoryDays: 30,
    elapsedDays: 0,
    dependencies: ["APP-03", "APP-04"],
    requiredDocs: ["DOC-04", "DOC-09"],
    fee: "₹18,000"
  },
  {
    id: "APP-08",
    name: "Consent to Operate (CTO)",
    department: "Maharashtra Pollution Control Board (MPCB)",
    simpleName: "Pollution Operational License",
    simpleDescription: "Final permission to run factory after installing pollution control machinery.",
    category: "Environment & Safety",
    status: "waiting-dependency",
    mandatory: true,
    whyApplies: "Required before commercial production starts.",
    statutoryDays: 45,
    elapsedDays: 0,
    dependencies: ["APP-02"],
    requiredDocs: ["DOC-08"],
    fee: "₹45,000"
  },
  {
    id: "APP-09",
    name: "Boiler Registration Certificate",
    department: "Directorate of Steam Boilers, Maharashtra",
    simpleName: "Steam Boiler Safety Permit",
    simpleDescription: "Inspection and safety certification for industrial steam boilers.",
    category: "Technical Safety",
    status: "waiting-dependency",
    mandatory: false,
    whyApplies: "Applies if steam generation boiler > 25 liters capacity is installed.",
    statutoryDays: 20,
    elapsedDays: 0,
    dependencies: ["APP-04"],
    requiredDocs: ["DOC-10"],
    fee: "₹12,000"
  },
  {
    id: "APP-10",
    name: "Weights & Measures Verification Certificate",
    department: "Legal Metrology Department, Maharashtra",
    simpleName: "Weighing Equipment Calibration Stamp",
    simpleDescription: "Stamping of packaging weighers and commercial scales.",
    category: "Consumer Affairs",
    status: "not-started",
    mandatory: true,
    whyApplies: "Commercial packaging unit using pre-packaged commodities.",
    statutoryDays: 15,
    elapsedDays: 0,
    dependencies: [],
    requiredDocs: ["DOC-06"],
    fee: "₹5,000"
  },
  {
    id: "APP-11",
    name: "Groundwater Abstraction NOC",
    department: "Central Ground Water Authority / GSDA Maharashtra",
    simpleName: "Borewell Water Extraction Clearance",
    simpleDescription: "Permission to draw underground water for industrial processing.",
    category: "Environment",
    status: "not-started",
    mandatory: false,
    whyApplies: "Applies only if groundwater extraction exceeds MIDC piped supply.",
    statutoryDays: 60,
    elapsedDays: 0,
    dependencies: ["APP-02"],
    requiredDocs: ["DOC-08"],
    fee: "₹10,000"
  },
  {
    id: "APP-12",
    name: "Contract Labour Registration",
    department: "Labour Commissionerate, Maharashtra",
    simpleName: "Contractor Worker Permit",
    simpleDescription: "Registration if hiring more than 20 contract laborers.",
    category: "Labour",
    status: "not-started",
    mandatory: true,
    whyApplies: "50 total workers with 25+ contract packaging workforce.",
    statutoryDays: 15,
    elapsedDays: 0,
    dependencies: [],
    requiredDocs: ["DOC-09"],
    fee: "₹3,000"
  }
];

export const DEMO_DOCUMENTS = [
  {
    id: "DOC-01",
    title: "MIDC Plot Lease Agreement",
    category: "Land",
    fileName: "MIDC_Lease_Agreement_Sahyadri.pdf",
    fileSize: "3.2 MB",
    uploadDate: "2024-02-18",
    expiryDate: "2054-02-17",
    validationStatus: "valid",
    validationMsg: "File verified. Legal signatures and plot boundary details confirmed.",
    reusableCount: 6,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Industrial Area Phase II, Pune"
  },
  {
    id: "DOC-02",
    title: "Project Detailed Report (DPR)",
    category: "Technical",
    fileName: "DPR_Sahyadri_Foods_v2.pdf",
    fileSize: "8.5 MB",
    uploadDate: "2024-02-20",
    expiryDate: null,
    validationStatus: "valid",
    validationMsg: "Financial projections and machinery specifications verified.",
    reusableCount: 4,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Chakan Phase II, Haveli, Pune"
  },
  {
    id: "DOC-03",
    title: "Approved Building & Structural Layout Plan",
    category: "Building",
    fileName: "Sanctioned_Architectural_Plan.pdf",
    fileSize: "14.1 MB",
    uploadDate: "2024-03-01",
    expiryDate: null,
    validationStatus: "valid",
    validationMsg: "Architect registration stamp and structural engineer sign-off verified.",
    reusableCount: 5,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Phase II, Pune"
  },
  {
    id: "DOC-04",
    title: "Fire Safety Equipment & Hydrant Plan",
    category: "Safety",
    fileName: "Fire_Layout_Scheme_2024.pdf",
    fileSize: "4.8 MB",
    uploadDate: "2024-03-15",
    expiryDate: "2025-03-14",
    validationStatus: "warning",
    validationMsg: "Expiry date approaching in 30 days. Renewal scheduled.",
    reusableCount: 3,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Industrial Area Phase II, Pune"
  },
  {
    id: "DOC-05",
    title: "Environmental Effluent Treatment Layout (ETP)",
    category: "Environmental",
    fileName: "ETP_Design_Specifications.pdf",
    fileSize: "5.6 MB",
    uploadDate: "2024-03-20",
    expiryDate: null,
    validationStatus: "mismatch",
    validationMsg: "Potential mismatch: Address reads 'Chakan Phase 1' instead of 'Phase 2'. Please review.",
    reusableCount: 2,
    extractedName: "Sahyadri Foods Private Limited",
    extractedAddress: "Plot A-45/2, Chakan Phase I, Pune" // deliberate mismatch demonstration
  },
  {
    id: "DOC-06",
    title: "Certificate of Incorporation & Articles",
    category: "Business",
    fileName: "Certificate_of_Incorporation_Sahyadri.pdf",
    fileSize: "1.9 MB",
    uploadDate: "2024-02-16",
    expiryDate: null,
    validationStatus: "valid",
    validationMsg: "Ministry of Corporate Affairs CIN verified.",
    reusableCount: 8,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Industrial Area Phase II, Pune"
  },
  {
    id: "DOC-07",
    title: "Water Analysis & Source Clearance Report",
    category: "Environmental",
    fileName: "Water_Quality_Lab_Report.pdf",
    fileSize: "2.1 MB",
    uploadDate: "2024-04-02",
    expiryDate: "2025-04-01",
    validationStatus: "valid",
    validationMsg: "Potable water standards ISO 10500 compliant.",
    reusableCount: 2,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Phase II, Pune"
  },
  {
    id: "DOC-08",
    title: "Environmental Undertaking Form",
    category: "Environmental",
    fileName: "Form_Undertaking_MPCB_Draft.pdf",
    fileSize: "0.8 MB",
    uploadDate: "2024-04-10",
    expiryDate: null,
    validationStatus: "action-needed",
    validationMsg: "Document missing authorized promoter digital signature. Click Fix Now.",
    reusableCount: 1,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Phase II, Pune"
  },
  {
    id: "DOC-09",
    title: "EPF & ESIC Registration Certificates",
    category: "Labour",
    fileName: "EPF_ESIC_Establishment_Code.pdf",
    fileSize: "1.2 MB",
    uploadDate: "2024-03-28",
    expiryDate: null,
    validationStatus: "valid",
    validationMsg: "Employee Provident Fund code code active.",
    reusableCount: 4,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Phase II, Pune"
  },
  {
    id: "DOC-10",
    title: "GST Registration Certificate (Form REG-06)",
    category: "Financial",
    fileName: "GST_Registration_Certificate.pdf",
    fileSize: "1.1 MB",
    uploadDate: "2024-02-17",
    expiryDate: null,
    validationStatus: "valid",
    validationMsg: "GSTIN state code 27 (Maharashtra) active.",
    reusableCount: 7,
    extractedName: "Sahyadri Foods Pvt. Ltd.",
    extractedAddress: "Plot A-45/2, Chakan Industrial Area Phase II, Pune"
  }
];

export const DEMO_APPLICATIONS = [
  {
    appId: "MH-DEMO-20482",
    approvalId: "APP-02",
    approvalName: "Consent to Establish (CTE)",
    department: "Maharashtra Pollution Control Board (MPCB)",
    submissionDate: "2024-04-05",
    currentStage: "Department Scrutiny & Query Raised",
    stageIndex: 3, // 0: Prepared, 1: Submitted, 2: Received, 3: Scrutiny, 4: Inspection, 5: Decision
    status: "action-required",
    slaDaysTotal: 45,
    daysElapsed: 28,
    daysRemaining: 17,
    slaStatus: "at-risk",
    delayRisk: "HIGH",
    query: {
      raisedDate: "2024-04-18",
      text: "Clarification required regarding ETP layout address inconsistency (Phase 1 vs Phase 2) and missing signature on Environmental Undertaking Form.",
      simpleExplanation: "The pollution board found that your environmental plan lists 'Phase 1' instead of 'Phase 2', and your undertaking form is missing a signature.",
      requiredAction: "Upload corrected ETP Design layout document with matching address and sign the Environmental Undertaking Form.",
      suggestedDocIds: ["DOC-05", "DOC-08"]
    },
    stages: [
      { name: "Application Prepared", date: "05 Apr 2024", completed: true },
      { name: "Documents Submitted", date: "06 Apr 2024", completed: true },
      { name: "Department Received", date: "08 Apr 2024", completed: true },
      { name: "Department Scrutiny", date: "18 Apr 2024", completed: false, current: true, warning: true },
      { name: "Site Inspection", date: "Pending", completed: false },
      { name: "Final Board Approval", date: "Pending", completed: false }
    ],
    delayDiagnosis: {
      bottleneck: "Document Clarification & Address Mismatch",
      waitingDays: 10,
      possibleDependency: "MPCB Technical Committee Scrutiny",
      recommendedAction: "Fix ETP Address Document and re-sign Undertaking Form to resume scrutiny within 48 hours."
    }
  },
  {
    appId: "MH-DEMO-20499",
    approvalId: "APP-03",
    approvalName: "Provisional Fire NOC",
    department: "Directorate of Maharashtra Fire Services",
    submissionDate: "2024-04-12",
    currentStage: "Inspection Scheduling",
    stageIndex: 4,
    status: "in-progress",
    slaDaysTotal: 30,
    daysElapsed: 19,
    daysRemaining: 11,
    slaStatus: "on-track",
    delayRisk: "MEDIUM",
    stages: [
      { name: "Application Prepared", date: "12 Apr 2024", completed: true },
      { name: "Documents Submitted", date: "12 Apr 2024", completed: true },
      { name: "Department Received", date: "14 Apr 2024", completed: true },
      { name: "Department Scrutiny", date: "19 Apr 2024", completed: true },
      { name: "Site Inspection", date: "Scheduled (12 Sep 2026)", completed: false, current: true },
      { name: "Issue Provisional NOC", date: "Pending", completed: false }
    ],
    delayDiagnosis: {
      bottleneck: "Fire Officer Inspection Queue in Chakan Zone",
      waitingDays: 5,
      possibleDependency: "Field Inspection Availability",
      recommendedAction: "Ensure site fire hydrants and approved drawing hardcopies are ready for inspection."
    }
  },
  {
    appId: "MH-DEMO-20101",
    approvalId: "APP-01",
    approvalName: "Industrial Land Allotment & NOC",
    department: "Maharashtra Industrial Development Corporation (MIDC)",
    submissionDate: "2024-02-18",
    currentStage: "Approved & Certificate Issued",
    stageIndex: 5,
    status: "completed",
    slaDaysTotal: 30,
    daysElapsed: 22,
    daysRemaining: 0,
    slaStatus: "completed",
    delayRisk: "LOW",
    stages: [
      { name: "Application Prepared", date: "18 Feb 2024", completed: true },
      { name: "Documents Submitted", date: "19 Feb 2024", completed: true },
      { name: "Department Received", date: "20 Feb 2024", completed: true },
      { name: "Department Scrutiny", date: "26 Feb 2024", completed: true },
      { name: "Land Possession Verification", date: "05 Mar 2024", completed: true },
      { name: "Approved & Issued", date: "10 Mar 2024", completed: true, current: true }
    ]
  }
];

export const DEMO_SCHEMES = [
  {
    id: "SCHEME-01",
    name: "Maharashtra Package Scheme of Incentives (PSI 2019)",
    offeredBy: "Department of Industries, Govt of Maharashtra",
    category: "Capital & GST Subsidy",
    matchPercentage: 94,
    whyMatches: [
      "Project located in Group D+ Industrial Area (Chakan MIDC)",
      "Medium Enterprise classification with ₹5 Cr investment",
      "Food Processing agro-sector qualifies for Special Category Bonus"
    ],
    benefits: "Up to 80% Capital Subsidy / SGST Reimbursement for 9 years + Power Tariff Subsidy of ₹1.00/unit",
    eligibilitySummary: "MSME investment above ₹50 Lakh in D/D+ talent zones with valid CTE & MIDC lease.",
    deadline: "2026-12-31",
    requiredDocs: ["DOC-01", "DOC-06", "DOC-10"]
  },
  {
    id: "SCHEME-02",
    name: "Chief Minister Agriculture & Food Processing Scheme",
    offeredBy: "Department of Agriculture, Govt of Maharashtra",
    category: "Agro Incentive",
    matchPercentage: 88,
    whyMatches: [
      "Fruit & Vegetable Processing focus",
      "Creates 50 direct local agricultural jobs",
      "Includes cold storage & post-harvest processing setup"
    ],
    benefits: "Financial grant of 50% on eligible plant & machinery up to ₹1.50 Crore.",
    eligibilitySummary: "Agro-processing units procuring at least 40% raw material from Maharashtra farmers.",
    deadline: "2026-11-15",
    requiredDocs: ["DOC-02", "DOC-06"]
  },
  {
    id: "SCHEME-03",
    name: "Green Manufacturing & ETP Capital Subsidy",
    offeredBy: "Maharashtra Pollution Control Board & MSINS",
    category: "Sustainability",
    matchPercentage: 82,
    whyMatches: [
      "Zero Liquid Discharge (ZLD) Effluent Treatment Plan",
      "Rooftop Solar Integration (>50 KW)"
    ],
    benefits: "Direct grant up to ₹25 Lakhs for Zero Liquid Discharge installation.",
    eligibilitySummary: "Orange/Red category MSMEs installing advanced water recycling infrastructure.",
    deadline: "2026-10-30",
    requiredDocs: ["DOC-05", "DOC-08"]
  }
];

export const DEMO_INSPECTIONS = [
  {
    id: "INSP-101",
    department: "Directorate of Maharashtra Fire Services",
    type: "Pre-Operational Fire Safety & Building Hydrant Verification",
    date: "2026-09-12",
    time: "11:30 AM",
    location: "Sahyadri Foods Plot A-45/2, Chakan Phase II, Pune",
    officer: "Inspector S. V. Kulkarni",
    status: "Upcoming",
    checklist: [
      { item: "Approved Fire Building Plan Hardcopy", status: "ready" },
      { item: "Fire Extinguisher Installation & Refill Log", status: "ready" },
      { item: "ETP & Hydrant Pressure Testing Certificate", status: "pending", note: "Upload safety records before inspection date" }
    ]
  },
  {
    id: "INSP-100",
    department: "MIDC Engineering Department",
    type: "Land Possession & Boundary Verification",
    date: "2024-03-05",
    time: "02:00 PM",
    location: "Plot A-45/2, Chakan Phase II",
    officer: "Exec Eng. A. R. Patil",
    status: "Completed",
    result: "Passed - Boundary markers verified according to layout"
  }
];

export const DEMO_COMPLIANCE_TASKS = [
  {
    id: "COMP-01",
    title: "Factory Annual Safety Return Filing",
    department: "DISH Maharashtra",
    dueDate: "2026-09-18",
    frequency: "Annual",
    status: "pending",
    daysRemaining: 15,
    category: "Labour & Safety"
  },
  {
    id: "COMP-02",
    title: "Quarterly Water & Air Environmental Report",
    department: "MPCB Pune Zone",
    dueDate: "2026-09-23",
    frequency: "Quarterly",
    status: "pending",
    daysRemaining: 20,
    category: "Environment"
  },
  {
    id: "COMP-03",
    title: "Factory Fire Equipment Maintenance Log Audit",
    department: "Fire Services",
    dueDate: "2026-09-29",
    frequency: "Half-Yearly",
    status: "pending",
    daysRemaining: 26,
    category: "Safety"
  },
  {
    id: "COMP-04",
    title: "GSTR-3B Monthly Return Filing",
    department: "GST Department",
    dueDate: "2026-09-20",
    frequency: "Monthly",
    status: "pending",
    daysRemaining: 17,
    category: "Financial"
  }
];

export const DEMO_RENEWALS = [
  {
    id: "REN-01",
    approvalName: "Fire Safety Equipment Log Certification",
    department: "Fire Services",
    expiryDate: "2026-09-20",
    daysLeft: 17,
    status: "critical",
    actionRequired: "Upload updated refill certificate"
  },
  {
    id: "REN-02",
    approvalName: "Consent to Establish Renewal",
    department: "MPCB",
    expiryDate: "2026-10-15",
    daysLeft: 42,
    status: "upcoming",
    actionRequired: "Submit renewal application with ETP status"
  },
  {
    id: "REN-03",
    approvalName: "Weights & Measures Calibration Stamping",
    department: "Legal Metrology",
    expiryDate: "2026-11-10",
    daysLeft: 68,
    status: "normal",
    actionRequired: "Schedule inspector visit"
  }
];

export const DEMO_OFFICER_QUEUE = [
  {
    appId: "MH-DEMO-20482",
    applicant: "Sahyadri Foods Pvt. Ltd.",
    sector: "Food Processing",
    district: "Pune",
    approvalName: "Consent to Establish (CTE)",
    department: "MPCB",
    submissionDate: "2024-04-05",
    daysPending: 28,
    slaDays: 45,
    risk: "High",
    riskReason: "Document address inconsistency and missing signature on undertaking",
    status: "Query Awaiting Response",
    assignedOfficer: "Priya Deshmukh (You)"
  },
  {
    appId: "MH-DEMO-20512",
    applicant: "Mahalaxmi Textiles Enterprise",
    sector: "Textiles & Garments",
    district: "Solapur",
    approvalName: "Consent to Establish (CTE)",
    department: "MPCB",
    submissionDate: "2024-04-10",
    daysPending: 23,
    slaDays: 45,
    risk: "Medium",
    riskReason: "High water consumption query",
    status: "Under Scrutiny",
    assignedOfficer: "Priya Deshmukh (You)"
  },
  {
    appId: "MH-DEMO-20550",
    applicant: "Vidarbha Agro Biotech Ltd.",
    sector: "Bio-Fertilizers",
    district: "Nagpur",
    approvalName: "Consent to Establish (CTE)",
    department: "MPCB",
    submissionDate: "2024-04-15",
    daysPending: 18,
    slaDays: 45,
    risk: "Low",
    riskReason: "All documents pre-validated with 98% score",
    status: "Ready for Approval",
    assignedOfficer: "Priya Deshmukh (You)"
  },
  {
    appId: "MH-DEMO-20588",
    applicant: "Konkan Seafood Processing Co.",
    sector: "Food Processing",
    district: "Ratnagiri",
    approvalName: "Consent to Establish (CTE)",
    department: "MPCB",
    submissionDate: "2024-04-18",
    daysPending: 15,
    slaDays: 45,
    risk: "Low",
    riskReason: "Standard green category parameters met",
    status: "Under Scrutiny",
    assignedOfficer: "Priya Deshmukh (You)"
  }
];

export const DEMO_BOTTLENECK_DATA = [
  { name: "Inspection Scheduling", percentage: 38, count: 48, avgDays: 14 },
  { name: "Document Clarification / Mismatch", percentage: 24, count: 31, avgDays: 9 },
  { name: "Department Technical Scrutiny", percentage: 19, count: 24, avgDays: 8 },
  { name: "Inter-department Dependency", percentage: 12, count: 15, avgDays: 12 },
  { name: "Fee Payment & Certificate Issue", percentage: 7, count: 9, avgDays: 3 }
];

export const DEMO_WORKLOAD_DATA = [
  { officer: "Priya Deshmukh (Pune Zone)", assigned: 38, capacity: 40, percentage: 95, status: "Overloaded" },
  { officer: "Ramesh Thorat (Nashik Zone)", assigned: 25, capacity: 40, percentage: 62, status: "Optimal" },
  { officer: "Sanjay Shinde (Chhatrapati Sambhajinagar)", assigned: 16, capacity: 40, percentage: 40, status: "Underutilized" }
];

export const MARATHI_TRANSLATIONS = {
  dashboard: "डॅशबोर्ड",
  approvals: "मंजुरी शोधा",
  applications: "माझे अर्ज",
  documents: "कागदपत्र तिजोरी",
  schemes: "शासकीय योजना",
  compliance: "अनुपालन केंद्र",
  passport: "व्यवसाय पासपोर्ट",
  inspections: "क्षेत्र तपासणी",
  grievances: "मदत आणि तक्रार",
  help: "मदत",
  askAI: "उद्योगसेतू एआय",
  tagline: "उभा करा. पालन करा. वाढवा.",
  heroSubtitle: "भारताच्या औद्योगिक सेवांसाठी तुमचे एकच प्रवेशद्वार.",
  startNewApp: "नवीन अर्ज सुरू करा",
  findService: "सेवा शोधा",
  quickActions: "जलद सेवा",
  quickServices: "जलद सेवा",
  trackApp: "अर्ज ट्रॅक करा",
  nextBestAction: "आपली पुढील सर्वोत्तम कृती",
  completeNow: "आत्ता पूर्ण करा",
  viewApp: "अर्ज पहा",
  goodMorning: "शुभ प्रभात",
  overallJourneyProgress: "एकूण प्रवास प्रगती",
  recommendedSchemes: "शिफारस केलेल्या शासकीय योजना",
  platformInnovation: "प्लेटफॉर्म नवोपक्रम",
  udyogsetuIntelligence: "उद्योगसेतू बुद्धिमत्ता",
  enterEntrepreneurPortal: "उद्योगोजक पोर्टलवर जा",
  enterOfficerPortal: "अधिकारी पोर्टलवर जा",
  enterAdminPortal: "प्रशासक पोर्टलवर जा",
  startBusinessJourney: "माझा व्यवसाय प्रवास सुरू करा",
  exploreHowItWorks: "हे कसे कार्य करते ते पाहा"
};

export const HINDI_TRANSLATIONS = {
  dashboard: "डैशबोर्ड",
  approvals: "अनुमोदन खोजें",
  applications: "मेरे आवेदन",
  documents: "दस्तावेज़ तिजोरी",
  schemes: "सरकारी योजनाएँ",
  compliance: "अनुपालन केंद्र",
  passport: "व्यापार पासपोर्ट",
  inspections: "निरीक्षण",
  grievances: "सहायता और शिकायत",
  help: "सहायता",
  askAI: "उद्योगसेतू एआई",
  tagline: "निर्माता बनें। अनुपालन करें। विकास करें।",
  heroSubtitle: "भारत की औद्योगिक सेवाओं का एकल द्वार।",
  startNewApp: "नया आवेदन शुरू करें",
  findService: "सेवा खोजें",
  quickActions: "त्वरित कार्रवाई",
  quickServices: "त्वरित सेवाएँ",
  trackApp: "आवेदन ट्रैक करें",
  nextBestAction: "आपकी अगली सर्वोत्तम कार्रवाई",
  completeNow: "अभी पूरा करें",
  viewApp: "आवेदन देखें",
  goodMorning: "सुप्रभात",
  overallJourneyProgress: "कुल यात्रा प्रगति",
  recommendedSchemes: "अनुशंसित सरकारी योजनाएं",
  platformInnovation: "मंच नवाचार",
  udyogsetuIntelligence: "उद्योगसेतू बुद्धिमत्ता",
  enterEntrepreneurPortal: "उद्यमी पोर्टल में प्रवेश करें",
  enterOfficerPortal: "अधिकारी पोर्टल में प्रवेश करें",
  enterAdminPortal: "प्रशासक पोर्टल में प्रवेश करें",
  startBusinessJourney: "मेरी व्यवसाय यात्रा शुरू करें",
  exploreHowItWorks: "यह कैसे काम करता है देखें"
};

export const ENGLISH_TRANSLATIONS = {
  dashboard: "Dashboard",
  approvals: "Approval Finder",
  applications: "My Applications",
  documents: "Document Vault",
  schemes: "Government Schemes",
  compliance: "Compliance Center",
  passport: "Business Passport",
  inspections: "Field Inspections",
  grievances: "Help & Grievances",
  help: "Help",
  askAI: "UdyogSetu AI Assistant",
  tagline: "Build. Comply. Grow.",
  heroSubtitle: "Your single window to India's industrial services.",
  startNewApp: "Start New Application",
  findService: "Find a Service",
  quickActions: "Quick Services",
  quickServices: "Quick Services",
  trackApp: "Track Application",
  nextBestAction: "Your Next Best Action",
  completeNow: "Complete Now",
  viewApp: "View Application",
  goodMorning: "Good morning",
  overallJourneyProgress: "Overall Journey Progress",
  recommendedSchemes: "Recommended Government Schemes",
  platformInnovation: "Platform Innovation",
  udyogsetuIntelligence: "UdyogSetu Intelligence",
  enterEntrepreneurPortal: "Enter Entrepreneur Portal",
  enterOfficerPortal: "Enter Officer Portal",
  enterAdminPortal: "Enter Admin Portal",
  startBusinessJourney: "Start My Business Journey",
  exploreHowItWorks: "Explore How It Works"
};


