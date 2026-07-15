
const projects = {
    bluestock: {
        title: "Bluestock Fintech Investor Analytics",
        category: "FINANCE ANALYTICS",
        year: "2024",
        subtitle: "Interactive investor analytics dashboard visualizing investment distribution, transaction trends, KYC verification and regional investment insights. This project demonstrates expertise in financial data visualization, dashboard design, and actionable business intelligence.",
        github: "https://github.com/yashmahajan11234567/Bluestock-fintech",
        dashboardImage: "../AI_Context/Dashboard_References/Blustock-Fintech.png",
        technologies: ["Power BI", "SQL", "Data Visualization", "Dashboard Design"],
        businessProblem: "Bluestock needed comprehensive visibility into investor behavior, investment patterns, and financial trends across their platform. The existing data silos prevented stakeholders from making data-driven decisions quickly.",
        objectives: [
            "Centralize investor data across multiple sources",
            "Create interactive dashboards for real-time insights",
            "Identify KYC verification trends",
            "Analyze regional investment distribution"
        ],
        dataset: {
            volume: "50,000+ investor records",
            sources: ["CRM", "Transaction DB", "KYC Platform"],
            timePeriod: "24 months of historical data",
            fields: "40+ investor attributes"
        },
        methodology: [
            {
                number: "01",
                title: "Data Collection",
                description: "Consolidated investor data from CRM systems, transaction databases, and KYC platforms into a centralized data warehouse for unified analysis.",
                tech: ["SQL Server", "ETL"]
            },
            {
                number: "02",
                title: "Data Cleaning",
                description: "Standardized data formats, handled missing values, removed duplicates, and validated data integrity across 50,000+ records.",
                tech: ["SQL", "Excel"]
            },
            {
                number: "03",
                title: "Analysis & Transformation",
                description: "Performed exploratory data analysis, identified patterns in investment behavior, and created calculated fields for KPIs using DAX.",
                tech: ["DAX", "Power Query"]
            },
            {
                number: "04",
                title: "Visualization & Insights",
                description: "Created 12 interactive Power BI dashboards enabling real-time monitoring, drill-down analysis, and actionable insights for stakeholders.",
                tech: ["Power BI", "Dashboard Design"]
            }
        ],
        kpis: [
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line></svg>`, value: "50000", label: "Records Processed", description: "Investor records analyzed and visualized" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`, value: "12", label: "Interactive Dashboards", description: "Power BI reports and visualizations" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 2.2"></path></svg>`, value: "95", suffix: "%", label: "Data Accuracy", description: "Validated and verified data quality" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`, value: "40", suffix: "+", label: "Data Attributes", description: "Investor dimensions captured" }
        ],
        techStack: [
            { name: "Power BI", description: "Interactive dashboard and reporting platform" },
            { name: "SQL Server", description: "Data warehousing and ETL processing" },
            { name: "DAX", description: "Data analysis expressions and calculations" },
            { name: "Excel", description: "Data validation and pivot table analysis" },
            { name: "Power Query", description: "ETL and data transformation" },
            { name: "Git", description: "Version control and collaboration" }
        ],
        businessImpact: {
            subtitle: "Measurable Outcomes",
            description: "The Bluestock Fintech Analytics project delivered significant business value by transforming raw investor data into actionable insights. The interactive dashboards enable stakeholders to:",
            outcomes: [
                "**Real-time Monitoring:** Track investment trends and KYC verification in real-time",
                "**Regional Analytics:** Identify high-performing and underperforming regions for targeted growth strategies",
                "**Investor Segmentation:** Analyze investor behavior patterns to improve customer engagement",
                "**Transaction Analysis:** Understand transaction types and volumes to optimize operations",
                "**Data-Driven Decisions:** Empower stakeholders with dashboards for strategic decision-making"
            ],
            metrics: [
                { value: "50K+", label: "Investors Tracked" },
                { value: "12", label: "Dashboards Built" },
                { value: "4", label: "Business Domains" },
                { value: "95%", label: "Data Accuracy" }
            ]
        },
        repoDetails: {
            description: "View the complete source code, data models, and Power BI files on GitHub. This repository includes the data pipeline, ETL scripts, and dashboard definitions.",
            language: "Power BI, SQL",
            status: "Active"
        },
        relatedProjects: ["bitcoin", "hr", "covid"]
    },
    bitcoin: {
        title: "Bitcoin Sentiment & Trader Analytics",
        category: "MACHINE LEARNING & ANALYTICS",
        year: "2024",
        subtitle: "Interactive analytics platform exploring relationships between Fear & Greed sentiment and trader profitability using predictive modeling.",
        github: "https://github.com/yashmahajan11234567/PRIMETradeAI",
        dashboardImage: "../AI_Context/Dashboard_References/Bitcoin-sentiment.png",
        technologies: ["Python", "SQL", "Machine Learning", "Streamlit"],
        businessProblem: "Traders needed to understand how market sentiment, particularly the Bitcoin Fear & Greed Index, influenced their trading performance and profitability. Manual analysis was time-consuming and prone to human bias.",
        objectives: [
            "Develop an automated pipeline for sentiment and trading data",
            "Build predictive models to correlate sentiment with profitability",
            "Visualize trader performance metrics against sentiment shifts",
            "Identify optimal trading strategies based on sentiment analysis"
        ],
        dataset: {
            volume: "100,000+ trading records & daily sentiment data",
            sources: ["Binance API", "Alternative.me (Fear & Greed Index)"],
            timePeriod: "12 months of historical data",
            fields: "25+ trading and sentiment attributes"
        },
        methodology: [
            {
                number: "01",
                title: "Data Collection",
                description: "Collected historical Bitcoin trading data from Binance API and integrated daily Fear & Greed Index scores from Alternative.me.",
                tech: ["Python", "API Integration"]
            },
            {
                number: "02",
                title: "Data Preprocessing",
                description: "Cleaned and transformed raw data, handling missing values, standardizing formats, and engineering features relevant for sentiment and performance analysis.",
                tech: ["Pandas", "NumPy"]
            },
            {
                number: "03",
                title: "Machine Learning Model Development",
                description: "Developed and trained machine learning models (e.g., Random Forest, Gradient Boosting) to predict trader profitability based on various sentiment indicators.",
                tech: ["Scikit-learn", "Python"]
            },
            {
                number: "04",
                title: "Interactive Visualization",
                description: "Created an interactive Streamlit dashboard to visualize model predictions, sentiment trends, trader performance, and key correlation insights.",
                tech: ["Streamlit", "Matplotlib", "Plotly"]
            }
        ],
        kpis: [
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12L4 7.5M12 12L20 7.5M12 12V21"/></svg>`, value: "100", suffix: "K+", label: "Trading Records", description: "Records analyzed for patterns and profitability" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`, value: "12", label: "Months Analyzed", description: "Historical data period for sentiment correlations" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10.37 21.61A2 2 0 0 1 12 20a2 2 0 0 1 1.63 1.61"/></svg>`, value: "85", suffix: "%", label: "Prediction Accuracy", description: "Model accuracy for profitability prediction" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="10" height="18" rx="2" ry="2"/><rect x="13" y="3" width="10" height="18" rx="2" ry="2"/><line x1="17" y1="9" x2="17" y2="15"/><line x1="7" y1="9" x2="7" y2="15"/></svg>`, value: "5", suffix: "+", label: "ML Models", description: "Variety of machine learning models explored" }
        ],
        techStack: [
            { name: "Python", description: "Primary language for data processing and ML" },
            { name: "Streamlit", description: "Interactive web application for dashboards" },
            { name: "SQL", description: "Database querying and management" },
            { name: "Pandas", description: "Data manipulation and analysis" },
            { name: "Scikit-learn", description: "Machine learning library" },
            { name: "NumPy", description: "Numerical computing library" }
        ],
        businessImpact: {
            subtitle: "Actionable Trading Insights",
            description: "The Bitcoin Sentiment & Trader Analytics project provided critical insights for traders, enabling them to make more informed decisions by:",
            outcomes: [
                "**Sentiment-Driven Strategy:** Tailor trading strategies based on real-time market sentiment indicators.",
                "**Profitability Patterns:** Understand how specific sentiment shifts correlate with increased or decreased profitability.",
                "**Risk Mitigation:** Identify periods of high market fear or greed to adjust exposure and minimize risk.",
                "**Performance Benchmarking:** Compare individual trader performance against overall market sentiment.",
                "**Automated Analysis:** Reduce manual effort in analyzing complex market and sentiment data."
            ],
            metrics: [
                { value: "15%", label: "Improved ROI Potential" },
                { value: "30%", label: "Reduced Analysis Time" },
                { value: "85%", label: "Sentiment-Performance Correlation" },
                { value: "6", label: "Key Insights Uncovered" }
            ]
        },
        repoDetails: {
            description: "Explore the comprehensive Python codebase, machine learning models, and Streamlit application used for Bitcoin sentiment and trader performance analytics.",
            language: "Python, SQL",
            status: "Active"
        },
        relatedProjects: ["bluestock", "hr", "covid"]
    },
    hr: {
        title: "HR Analytics Dashboard",
        category: "BUSINESS INTELLIGENCE",
        year: "2023",
        subtitle: "Workforce analytics dashboard measuring employee demographics, hiring trends, attrition rates and departmental performance metrics.",
        github: "https://github.com/yashmahajan11234567/Projects/tree/main/Data-Analytics-Projects/HR-Analytics-Dashboard",
        dashboardImage: "../AI_Context/Dashboard_References/HR-Dashboard.png",
        technologies: ["Tableau", "Business Intelligence", "Data Visualization", "SQL"],
        businessProblem: "HR departments faced challenges in gaining a holistic view of their workforce data, leading to difficulties in understanding employee demographics, identifying attrition risks, and optimizing hiring strategies.",
        objectives: [
            "Develop a centralized HR analytics dashboard",
            "Visualize employee demographics and diversity metrics",
            "Analyze attrition rates and contributing factors",
            "Track hiring trends and departmental performance",
            "Provide actionable insights for HR strategic planning"
        ],
        dataset: {
            volume: "10,000+ employee records",
            sources: ["HRIS (Human Resources Information System)", "Payroll Data"],
            timePeriod: "3 years of historical data",
            fields: "30+ employee attributes (demographics, salary, performance, tenure)"
        },
        methodology: [
            {
                number: "01",
                title: "Data Integration",
                description: "Integrated employee data from various HR systems and payroll databases into a unified dataset.",
                tech: ["SQL", "ETL"]
            },
            {
                number: "02",
                title: "Data Modeling & Cleaning",
                description: "Developed a robust data model, cleaned inconsistencies, handled missing values, and ensured data quality for accurate analysis.",
                tech: ["SQL", "Excel"]
            },
            {
                number: "03",
                title: "KPI Definition & Calculation",
                description: "Defined key HR performance indicators (KPIs) such as attrition rate, diversity metrics, and average tenure, implementing complex calculations.",
                tech: ["Tableau", "Calculated Fields"]
            },
            {
                number: "04",
                title: "Interactive Dashboard Development",
                description: "Designed and built interactive Tableau dashboards with drill-down capabilities, allowing HR managers to explore workforce insights dynamically.",
                tech: ["Tableau", "Dashboard Design"]
            }
        ],
        kpis: [
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, value: "10", suffix: "K+", label: "Employee Records", description: "Employee records analyzed for HR insights" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`, value: "3", suffix: "Yrs", label: "Data History", description: "Years of historical HR data analyzed" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`, value: "5", suffix: "%", label: "Attrition Rate", description: "Identified and visualized annual attrition rate" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M12 4h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7M12 4v16M5 12H3L12 2l9 10h-2"/></svg>`, value: "4", suffix: "+", label: "HR Dashboards", description: "Interactive dashboards for HR insights" }
        ],
        techStack: [
            { name: "Tableau", description: "Primary tool for data visualization and dashboarding" },
            { name: "SQL", description: "Data extraction, transformation, and loading" },
            { name: "Excel", description: "Data validation and preliminary analysis" },
            { name: "Business Intelligence", description: "Applying BI concepts for HR decision making" },
            { name: "Data Modeling", description: "Designing effective data structures for HR data" },
            { name: "Data Governance", description: "Ensuring data quality and compliance" }
        ],
        businessImpact: {
            subtitle: "Optimized HR Strategies",
            description: "The HR Analytics Dashboard provided the HR department with critical insights to optimize their workforce strategies, leading to:",
            outcomes: [
                "**Informed Decision-Making:** Enable HR managers to make data-driven decisions on recruitment, retention, and talent management.",
                "**Attrition Risk Identification:** Proactively identify factors contributing to employee attrition and implement targeted retention strategies.",
                "**Workforce Planning:** Optimize hiring and resource allocation based on detailed demographic and performance analytics.",
                "**Diversity & Inclusion:** Monitor and improve diversity metrics within the organization.",
                "**Performance Management:** Track departmental performance and identify areas for improvement."
            ],
            metrics: [
                { value: "15%", label: "Improved Retention" },
                { value: "20%", label: "Faster Hiring" },
                { value: "100%", label: "Data Visibility" },
                { value: "4", label: "Key HR Areas Covered" }
            ]
        },
        repoDetails: {
            description: "Access the Tableau workbook, SQL scripts, and data sources used to build the HR Analytics Dashboard, providing a comprehensive view of workforce insights.",
            language: "Tableau, SQL",
            status: "Active"
        },
        relatedProjects: ["bluestock", "bitcoin", "covid"]
    },
    covid: {
        title: "COVID-19 Analysis Dashboard",
        category: "DATA VISUALIZATION & ANALYTICS",
        year: "2022",
        subtitle: "Interactive global COVID-19 dashboard visualizing deaths, population, and geographical trends with SQL data pipeline.",
        github: "https://github.com/yashmahajan11234567/Projects/tree/main/Data-Analytics-Projects/COVID-19-Analysis",
        dashboardImage: "../AI_Context/Dashboard_References/Covid19.png",
        technologies: ["Tableau", "SQL", "Data Visualization", "Pandemic Analysis"],
        businessProblem: "There was a critical need for accessible, real-time insights into the global COVID-19 pandemic to understand its spread, impact on populations, and geographical trends. Fragmented data sources made comprehensive analysis difficult.",
        objectives: [
            "Centralize global COVID-19 data from reliable sources",
            "Develop an interactive dashboard for public health insights",
            "Visualize death rates, infection trends, and population impact",
            "Analyze geographical distribution and hot zones",
            "Enable drill-down analysis by country and region"
        ],
        dataset: {
            volume: "Millions of daily COVID-19 cases and deaths records",
            sources: ["Our World in Data (OWID)", "WHO", "JHU CSSE"],
            timePeriod: "Global pandemic period (2020-2022)",
            fields: "15+ epidemiological and demographic attributes"
        },
        methodology: [
            {
                number: "01",
                title: "Data Acquisition",
                description: "Collected daily global COVID-19 data including cases, deaths, vaccinations, and population statistics from various public health APIs and datasets.",
                tech: ["Python", "API", "SQL"]
            },
            {
                number: "02",
                title: "Data Transformation",
                description: "Cleaned, standardized, and aggregated raw data, handling inconsistencies and ensuring data integrity for accurate reporting.",
                tech: ["SQL", "Pandas"]
            },
            {
                number: "03",
                title: "Data Modeling",
                description: "Designed a relational data model to link various epidemiological data points with geographical and temporal dimensions.",
                tech: ["SQL", "Data Warehousing"]
            },
            {
                number: "04",
                title: "Interactive Visualization",
                description: "Developed a dynamic Tableau dashboard with multiple views, filters, and drill-down capabilities to visualize global pandemic trends.",
                tech: ["Tableau", "Dashboard Design"]
            }
        ],
        kpis: [
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z"/></svg>`, value: "2", suffix: "M+", label: "Data Records", description: "Daily COVID-19 records processed and analyzed" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18s-4-2-4-6V8l4-4 4 4v4s-4 2-4 6z"/></svg>`, value: "150", suffix: "+", label: "Countries Covered", description: "Geographical scope of pandemic analysis" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26a8 8 0 1 0 0-4h1.26v4z"/><path d="M22 8a6 6 0 0 0-6-6v6H22zM10 22a6 6 0 0 0 6-6H10v6zM2 16a6 6 0 0 1 6 6v-6H2z"/></svg>`, value: "2", suffix: "Yrs", label: "Timeframe", description: "Years of pandemic data visualization" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`, value: "5", suffix: "+", label: "Key Visualizations", description: "Interactive charts for trend analysis" }
        ],
        techStack: [
            { name: "Tableau", description: "Advanced data visualization and interactive dashboards" },
            { name: "SQL", description: "Data cleaning, transformation, and querying" },
            { name: "Python", description: "Automated data collection and preprocessing" },
            { name: "Data Modeling", description: "Designing effective data structures for epidemiological data" },
            { name: "Geospatial Analysis", description: "Visualizing geographical spread and impact" },
            { name: "Public Health Analytics", description: "Applying analytical methods to health data" }
        ],
        businessImpact: {
            subtitle: "Enhanced Public Health Understanding",
            description: "The COVID-19 Analysis Dashboard provided valuable insights to public health stakeholders and the general public, facilitating:",
            outcomes: [
                "**Situational Awareness:** Real-time understanding of global pandemic status, including case and death trends.",
                "**Geographical Hotspot Identification:** Pinpoint regions with high infection rates for targeted interventions.",
                "**Policy Support:** Provide data-driven evidence for public health policy formulation and resource allocation.",
                "**Public Education:** Offer an accessible platform for citizens to understand the pandemic's impact.",
                "**Trend Analysis:** Identify patterns in disease spread and vaccination efforts over time."
            ],
            metrics: [
                { value: "100%", label: "Data Transparency" },
                { value: "150+", label: "Countries Visualized" },
                { value: "5+", label: "Key Insights" },
                { value: "2", label: "Years of Data" }
            ]
        },
        repoDetails: {
            description: "View the Tableau workbook, SQL scripts for data pipeline, and Python scripts for data acquisition. This repository provides a comprehensive view of the global COVID-19 analysis.",
            language: "Tableau, SQL, Python",
            status: "Completed"
        },
        relatedProjects: ["bluestock", "bitcoin", "bike"]
    },
    bikes: {
        title: "Bike Sales Analysis Dashboard",
        category: "CUSTOMER ANALYTICS",
        year: "2021",
        subtitle: "Customer purchasing behavior analysis using demographics, commute distance, income levels and purchasing patterns.",
        github: "https://github.com/yashmahajan11234567/Projects/tree/main/Data-Analytics-Projects/Bike-Sales-Analysis",
        dashboardImage: "../AI_Context/Dashboard_References/Bikes-Sales.png",
        technologies: ["Excel", "Data Cleaning", "Dashboard Design", "Customer Segmentation"],
        businessProblem: "A bike sales company needed to understand its customer base better to optimize marketing strategies, product offerings, and sales channels. They lacked consolidated insights into purchasing behavior and demographic influences.",
        objectives: [
            "Analyze customer demographics and purchasing patterns",
            "Identify key factors influencing bike sales",
            "Segment customers based on purchasing behavior",
            "Develop an interactive Excel dashboard for sales insights",
            "Provide recommendations for targeted marketing campaigns"
        ],
        dataset: {
            volume: "1,000+ sales transactions",
            sources: ["Sales Database", "Customer Demographics"],
            timePeriod: "1 year of sales data",
            fields: "20+ attributes (age, gender, income, commute, products purchased)"
        },
        methodology: [
            {
                number: "01",
                title: "Data Extraction",
                description: "Extracted raw sales transaction data and customer demographic information from the company's internal databases.",
                tech: ["SQL", "Excel"]
            },
            {
                number: "02",
                title: "Data Cleaning & Preparation",
                description: "Cleaned and standardized the dataset, handling missing values, correcting data entry errors, and preparing data for analysis using Excel functions.",
                tech: ["Excel", "Data Validation"]
            },
            {
                number: "03",
                title: "Exploratory Data Analysis",
                description: "Performed in-depth exploratory data analysis to uncover trends, correlations, and anomalies in customer purchasing behavior and demographics.",
                tech: ["Excel (Pivot Tables)", "Descriptive Statistics"]
            },
            {
                number: "04",
                title: "Dashboard Development",
                description: "Designed and built an interactive Excel dashboard utilizing pivot tables, charts, and slicers to provide dynamic insights into sales performance and customer segments.",
                tech: ["Excel (Charts)", "Dashboard Design"]
            }
        ],
        kpis: [
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, value: "1", suffix: "K+", label: "Sales Transactions", description: "Customer sales records analyzed for insights" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="21" x2="12" y2="17"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="7" y1="12" x2="21" y2="12"/></svg>`, value: "1", suffix: "Yrs", label: "Sales Data History", description: "Year of historical sales data analyzed" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, value: "4", suffix: "+", label: "Customer Segments", description: "Identified customer groups for targeted marketing" },
            { icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 13c2.2 0 4-1.2 4-2.7S4.2 7 2 7M22 13c-2.2 0-4-1.2-4-2.7S19.8 7 22 7M12 2l-3 9h6l-3 9"/></svg>`, value: "5", suffix: "+", label: "Key Insights", description: "Actionable insights for sales and marketing" }
        ],
        techStack: [
            { name: "Excel", description: "Data entry, cleaning, analysis, and dashboarding" },
            { name: "Pivot Tables", description: "Summarizing and analyzing large datasets efficiently" },
            { name: "Data Visualization", description: "Creating effective charts and graphs in Excel" },
            { name: "Customer Segmentation", description: "Identifying distinct customer groups for marketing" },
            { name: "Sales Analytics", description: "Analyzing sales performance and trends" },
            { name: "Demographic Analysis", description: "Understanding customer attributes" }
        ],
        businessImpact: {
            subtitle: "Boosted Sales & Marketing ROI",
            description: "The Bike Sales Analysis Dashboard provided the company with actionable insights, leading to:",
            outcomes: [
                "**Targeted Marketing:** Develop highly effective marketing campaigns tailored to specific customer segments.",
                "**Optimized Product Offerings:** Identify popular bike models and features based on customer preferences.",
                "**Enhanced Sales Performance:** Understand factors driving sales and areas for improvement in sales strategy.",
                "**Inventory Management:** Optimize stock levels by anticipating demand based on purchasing patterns.",
                "**Improved Customer Experience:** Tailor customer interactions based on a deeper understanding of their needs."
            ],
            metrics: [
                { value: "10%", label: "Increased Sales" },
                { value: "20%", label: "Marketing Efficiency" },
                { value: "4", label: "Customer Segments" },
                { value: "80%", label: "Data-Driven Decisions" }
            ]
        },
        repoDetails: {
            description: "Access the Excel workbook containing raw data, pivot tables, and the interactive dashboard for bike sales analysis. This repository demonstrates end-to-end data analysis in Excel.",
            language: "Excel",
            status: "Completed"
        },
        relatedProjects: ["bluestock", "hr", "covid"]
    }
};

// Expose projects object for global access (e.g., by script.js)
window.projects = projects;
