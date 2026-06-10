export const successProjects = [
  {
    id: "01",
    cat: "E-COMMERCE",
    title: "Attribution & Waste Recovery",
    metric: "32% WASTE REDUCTION",
    shortDesc: "Fragmented tracking across ad platforms led to severe over-reporting errors.",
    longDesc: "This clinical intervention targeted a D2C entity spending $40k/mo. By auditing the 'Attribution Gap' between Meta/Google reports and actual warehouse conversions, we identified significant overlaps.",
    pythonlogic: "from scipy.stats import ttest_ind\n# Verifying statistical significance of ROAS lift\nresult = ttest_ind(group_a, group_b)\nprint(f'P-Value: {result.pvalue}')",
    outcome: "Eliminated $14k/mo in wasted spend and **INCREASED NET PROFIT BY 24%** through clinical data validation.",
    stack: ["Python", "SQL", "GA4 BigQuery"],
    metadata: { client: "Global D2C", region: "North America", year: "2024" },
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80",
      "https://images.unsplash.com/photo-1454165833762-02ab4f40c741?q=80"
    ]
  },
  {
    id: "02",
    cat: "NGO",
    title: "Impact Data Infrastructure",
    metric: "3-YEAR GRANT SECURED",
    shortDesc: "Manual fieldwork reporting delayed disbursement from international donors.",
    longDesc: "We built the M&E infrastructure required to prove social ROI to EU-based donors. This involved automating 12 months of manual fieldwork logs into a verified Power BI dashboard.",
    pythonlogic: "import pandas as pd\ndef clean_field_logs(df):\n    return df.dropna(subset=['impact_metric']).reset_index()",
    outcome: "Full digitization of field metrics **SECURED A $1.2M MULTI-YEAR GRANT EXTENSION** based on empirical evidence.",
    stack: ["Power BI", "Excel Logic", "Impact Mapping"],
    metadata: { client: "Humanitarian Mission", region: "East Africa", year: "2023" },
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80"
    ]
  },
  {
    id: "03",
    cat: "STRATEGIC",
    title: "Predictive Churn Engine",
    metric: "92% FORECAST ACCURACY",
    shortDesc: "A scaling subscription brand couldn't identify 'at-risk' segments before cancellation.",
    longDesc: "We deployed a Random Forest classifier to identify behavioral markers of churn. This allowed the brand to automate re-engagement workflows for high-value customers 14 days before their predicted exit.",
    pythonlogic: "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)",
    outcome: "Detected 15k high-risk profiles with 92% precision, **REDUCING ANNUAL CHURN BY 12.5%** and stabilizing MRR.",
    stack: ["Scikit-Learn", "Python", "PostgreSQL"],
    metadata: { client: "SaaS Entity", region: "Europe", year: "2024" },
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80"
    ]
  },
  {
    id: "04",
    cat: "E-COMMERCE",
    title: "Inventory Correlation Audit",
    metric: "22% OVERHEAD REDUCTION",
    shortDesc: "Mismatch between ad-spend and warehouse stock led to $50k in out-of-stock marketing waste.",
    longDesc: "We built a real-time bridge between Shopify inventory levels and Meta Ads Manager. The system automatically pauses creative assets when stock falls below a 5-day burn rate.",
    pythonlogic: "# Real-time stock-to-ad synchronization\nif stock_level < threshold:\n    pause_ad_set(ad_id)\n    notify_logistics(sku_id)",
    outcome: "Eliminated marketing spend on out-of-stock items, **SAVING $8.2K IN MONTHLY AD WASTE** and optimizing supply chain flow.",
    stack: ["Shopify API", "Python", "Meta API"],
    metadata: { client: "D2C Fashion", region: "Global", year: "2024" },
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80"
    ]
  },
  {
    id: "05",
    cat: "NGO",
    title: "Regional Crisis Mapping",
    metric: "100% DATA TRACEABILITY",
    shortDesc: "International donor required ISO-grade audit trails for crisis response funding.",
    longDesc: "Funder compliance required every dollar to be linked to a specific field outcome. We established a secure SQL-based ledger that mapped financial disbursement to verified field impact reports.",
    pythonlogic: "SELECT timestamp, disbursement_id, impact_score\nFROM humanitarian_ledger\nWHERE audit_status = 'VERIFIED'",
    outcome: "Achieved **ZERO-ERROR AUDIT STATUS** during UN-level review, ensuring continued multi-national partnership.",
    stack: ["SQL", "Azure", "Encryption Protocol"],
    metadata: { client: "Global Health NGO", region: "Central Africa", year: "2023" },
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80"
    ]
  },
  {
    id: "06",
    cat: "STRATEGIC",
    title: "LTV Behavioral Clustering",
    metric: "+45% CLV INCREASE",
    shortDesc: "Brand was treating all customers with a single 'average' acquisition strategy.",
    longDesc: "We used K-Means clustering to segment the database into 5 distinct behavioral personas. Strategy was then shifted from 'mass acquisition' to high-value 'Champion' retention.",
    pythonlogic: "from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=5)\nclusters = kmeans.fit_predict(user_features)",
    outcome: "Tailored retention flows for high-value segments **RAISED AVERAGE CUSTOMER LIFETIME VALUE BY 45%** in 180 days.",
    stack: ["Python", "K-Means", "BigQuery"],
    metadata: { client: "Luxury Retailer", region: "Middle East", year: "2024" },
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1507537362145-5f031c620ddd?q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80"
    ]
  },
  {
    id: "07",
    cat: "E-COMMERCE",
    title: "ROAS Attribution Cleanup",
    metric: "ZERO ATTRIBUTION OVERLAP",
    shortDesc: "Meta Ads and Google Ads were both claiming credit for the same $200k in sales.",
    longDesc: "We applied a Position-Based (U-Shaped) attribution model to de-duplicate conversion credit. This revealed that 35% of 'Top-Performing' Facebook ads were actually assisted by Google Search.",
    pythonlogic: "def calculate_u_shaped_credit(touchpoints):\n    # 40% First, 40% Last, 20% Middle\n    return weighted_conversion",
    outcome: "Corrected ad-spend allocation, **RECLAIMING $60K IN OVER-STATED REVENUE CREDIT** across platforms.",
    stack: ["Attribution Modeling", "Python", "GA4"],
    metadata: { client: "Direct-to-Consumer", region: "Global", year: "2024" },
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"
    ]
  }
];