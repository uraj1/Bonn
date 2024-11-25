import { useParams } from 'react-router-dom';

// Define types for chapter and section content
interface Section {
  title: string;
  content: string;
  pros?: string[];
}

interface Chapter {
  title: string;
  sections: Section[];
}

const ChapterDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the chapter id from the URL

  // Sample content based on the chapter id (replace with dynamic content as needed)
  const chaptersContent: { [key: string]: Chapter } = {
    '1': {
      title: "INTRODUCTION",
      sections: [
        {
          title: "Background",
          content: `Supply chain management (SCM) is a core component of operations in industries such as manufacturing, logistics, and retail. It involves the planning and oversight of product movement from production points to end customers. An optimized supply chain minimizes costs, maximizes efficiency, and ultimately boosts customer satisfaction.
  
          In the food manufacturing industry, companies face challenges like fluctuating demand, high transportation costs, and the need for strategically located distribution centres. Production engineers play a crucial role in designing efficient supply chain networks by optimizing transportation, storage, and distribution. Through effective design, engineers contribute to reduced operational costs and improved service levels.
  
          This project focuses on SCM optimization for BONN, a prominent food manufacturing company in India. By identifying high-demand areas and optimizing transportation routes, this study seeks to create a supply chain network that reduces costs while meeting demand efficiently by critically locating the production centres.`,
        },
        {
          title: "Objective",
          content: `The primary objective of this project is to design a cost-effective supply chain network for BONN that minimizes transportation expenses and efficiently serves demand locations across India. By leveraging clustering techniques such as K-means and the center-of-gravity method, we aim to identify optimal distribution centers and strategic transportation routes to enhance BONN’s supply chain.`,
        },
        {
          title: "Scope",
          content: `This project covers:
• A case study analysis of BONN’s current supply chain operations 
• Demand mapping across major cities and states in India
• Cluster and sub-cluster formation using K-means and silhouette score
• Centre of gravity calculations to determine ideal distribution centres
• Cost analysis for the proposed network design`,
        },
        {
          title: "Learnings",
          content: `This project has provided significant insights and practical skills that will benefit us as final-year mechanical engineering students preparing to enter professional roles:

1. Application of Analytical Techniques: By employing clustering algorithms like K-means and advanced methods like the centre-of-gravity model, we have developed a strong understanding of how data-driven approaches can influence logistical and strategic decisions in supply chain management.

2. Supply Chain Network Design and Optimization: Through real-world application, we have gained hands-on experience in designing a supply chain network from scratch, including demand analysis, route optimization, and the strategic placement of distribution centers. This skill is invaluable in industries where cost management and efficiency are key.

3. Cost Analysis and Economic Decision-Making: We learned how to evaluate the financial impact of logistical decisions and transportation routes, fostering an understanding of cost-benefit analysis in large-scale operations.

4. Practical Knowledge of Geospatial Analysis: Working with demand mapping and regional distribution on a national scale allowed us to apply geospatial data to practical problems, which can be expanded to global applications in future projects.

5. Team Collaboration and Project Management: Engaging in this project has sharpened our teamwork and project management skills, helping us coordinate multiple aspects of analysis and implementation effectively within a structured timeline.

6. Problem-Solving and Critical Thinking: Facing real-life challenges in data analysis and optimization has strengthened our critical thinking abilities, enabling us to devise solutions under constraints—a crucial skill in engineering and beyond.

This project has been a holistic learning experience, equipping us with both technical skills and the critical thinking required to tackle complex supply chain challenges in today’s industrial environment.`,
        },
      ],
    },
    // Add more chapters here based on your requirements
    '2': {
        title: "Case Study of BONN",
        sections: [
          {
            title: "Overview of BONN’s Operations",
            content: `Bonn Group of Industries is a food company based in Ludhiana, Punjab, India. Founded in 1985, it produces a variety of food products including breads, biscuits, cakes, and cookies. These products are sold in both Indian and International markets.`,
          },
          {
            title: "Bonn Product Variety",
            content: `The following table provides a detailed overview of the variety of products offered by Bonn:`,
            table: {
              headers: [
                "Sr. No.",
                "Product Name",
                "Product Category",
                "Net Weight of 1 Packet",
                "Approx Volume of 1 Packet",
                "Selling Price",
                "Shelf Life",
              ],
              rows: [
                ["1", "Bourbon (Americana)", "Biscuit", "150g", "0.25 L", "₹30", "6-9 months"],
                ["2", "Butter Cookies (Americana)", "Biscuit", "67g", "0.112 L", "₹10", "6-12 months"],
                ["3", "Cheese Cracker (Americana)", "Biscuit", "70g", "0.117 L", "₹7.5", "6 months"],
                ["4", "Coconut Cookies (Americana)", "Biscuit", "67.5g", "0.113 L", "₹10", "6-9 months"],
                ["5", "Healthy Atta Cookies (Americana)", "Biscuit", "70g", "0.117 L", "₹7.5", "6 months"],
                ["6", "Garlic Paprika (Americana)", "Biscuit", "150g", "0.25 L", "₹30 - ₹50", "6 months"],
                ["7", "Cream Delight (Bonn)", "Biscuit", "150g", "0.25 L", "₹25 - ₹40", "6-9 months"],
                ["8", "Butter Bonn (Bonn)", "Biscuit", "200g", "0.333 L", "₹10", "6-9 months"],
                ["9", "Twin Bite (Bonn)", "Biscuit", "150g", "0.25 L", "₹30 - ₹50", "6 months"],
                ["10", "Saltino (Bonn)", "Biscuit", "150g", "0.25 L", "₹25 - ₹40", "6 months"],
                ["11", "Bourbon (Bonn)", "Biscuit", "75g", "0.125 L", "₹10", "6-9 months"],
                ["12", "Coconut (Bonn)", "Biscuit", "76g", "0.127 L", "₹10", "6-9 months"],
                ["13", "Marie Day (Bonn)", "Biscuit", "250g", "0.417 L", "₹25 - ₹40", "6-12 months"],
                ["14", "Fruit Delight (Bonn)", "Biscuit", "200g", "0.33 L", "₹35", "6-9 months"],
                ["15", "Oatmeal Cookies (Americana)", "Biscuit", "100g", "0.16 L", "₹20", "6 months"],
                ["16", "Honey Glazed Biscuits (Bonn)", "Biscuit", "150g", "0.25 L", "₹40", "6-9 months"],
                ["17", "Choco Chip Cookies (Americana)", "Biscuit", "125g", "0.2 L", "₹50", "6 months"],
                ["18", "Digestive Biscuits (Bonn)", "Biscuit", "250g", "0.42 L", "₹45", "6-12 months"],
                ["19", "Classic Creams (Bonn)", "Biscuit", "120g", "0.2 L", "₹25", "6-9 months"],
                ["20", "Wheat Cracker (Americana)", "Biscuit", "180g", "0.3 L", "₹30", "6 months"],
          
              ],
            },
          },
        ],
      },
     '3': {
  title: "Supply Chain Optimization for BONN",
  sections: [
    {
      title: "Overview of Supply Chain Optimization",
      content: `Supply chain optimization is the process of enhancing the overall performance of a company's supply chain by reducing operational costs, improving service levels, and increasing the speed of product delivery. For BONN, a leading food manufacturer, optimizing the supply chain is crucial to ensuring efficient product delivery across the nation while maintaining low costs and high customer satisfaction. This process involves understanding the full scope of BONN’s logistics, from raw material procurement to final delivery to distributors and retailers, ensuring that all activities align with the company’s business objectives.`,
    },
    {
      title: "Challenges in the Current Supply Chain",
      content: `The existing supply chain of BONN faces several hurdles, which hinder its ability to meet customer demand in a cost-efficient and timely manner. Some of the key challenges include:
      
      - Fluctuating Demand: Consumer preferences for food products can vary significantly by region and season, making demand prediction difficult. This leads to overstocking in some areas and stockouts in others.
      - High Transportation Costs: BONN's wide network of distribution centers and multiple product lines contribute to high transportation expenses. The distance between manufacturing plants, warehouses, and retail outlets adds additional complexity and costs.
      - Inventory Management: BONN needs to maintain an adequate level of inventory in various regional warehouses while avoiding excess stock that ties up capital. Balancing inventory levels with demand while maintaining efficient storage is a significant challenge.
      - Regional Variability: Different regions in India have varying demand patterns, which require specialized transportation routes and tailored distribution strategies. This complexity makes it harder to create a one-size-fits-all solution.`,
    },
    {
      title: "Optimization Techniques Used",
      content: `To address the challenges mentioned, several optimization techniques have been utilized:
      
      - Clustering Analysis with K-Means: K-means clustering is used to segment the demand across different regions into clusters that represent areas with similar demand characteristics. This enables BONN to allocate resources efficiently and determine the optimal locations for distribution centers.
      - Center-of-Gravity Method: This technique is used to find the optimal location for BONN’s distribution centers based on demand distribution across India. It minimizes transportation costs by locating centers closer to the regions with the highest demand.
      - Transportation Route Optimization: To minimize transportation costs, the supply chain team implemented route optimization algorithms that calculate the most efficient paths for delivery trucks to take from production facilities to distribution centers and from warehouses to retail outlets. This helps reduce fuel consumption and delivery time, improving overall supply chain efficiency.
      - Inventory Optimization Models: The use of advanced inventory models, including Just-In-Time (JIT) and Economic Order Quantity (EOQ), helps to strike a balance between maintaining sufficient inventory to meet demand and minimizing overstocking to reduce warehousing costs.`,
    },
    {
      title: "Proposed Supply Chain Model",
      content: `The new supply chain model proposed for BONN involves several strategic elements designed to streamline operations and reduce costs. Key components of the model include:
      
      - Centralized and Decentralized Distribution System: The model proposes a hybrid distribution network, combining centralized manufacturing with strategically placed regional warehouses. This enables BONN to respond more swiftly to regional demand fluctuations while keeping transportation costs under control.
      - Demand-Driven Production: The production system will be adapted to respond dynamically to demand forecasts. Advanced data analytics will be used to predict regional demand trends, and production will be scheduled accordingly to avoid overproduction and stockouts.
      - Optimized Transportation Routes: Leveraging the center-of-gravity method and route optimization algorithms, BONN can determine the best locations for new distribution centers, reduce the number of kilometers traveled by delivery trucks, and cut down on transportation expenses. Additionally, the use of multi-modal transport strategies (rail, road, and sea) where appropriate can help further reduce costs.
      - Real-Time Tracking and Data Integration: The integration of real-time tracking systems will allow BONN to monitor shipments, ensuring accurate delivery times and minimizing delays. The system will provide end-to-end visibility, which will help in identifying potential issues in the supply chain and enabling timely solutions.`,
    },
    {
      title: "Results and Benefits",
      content: `Implementing this optimized supply chain model has already shown promising results. The benefits BONN will see from this optimization include:
      
      - Reduced Transportation Costs: The improved route planning and location of distribution centers closer to high-demand regions have already led to significant cost savings in logistics. BONN is able to deliver products to markets more quickly and with lower fuel costs.
      - Improved Inventory Management: By aligning production and inventory levels with actual regional demand, BONN has reduced inventory holding costs. The JIT production strategy has helped minimize warehousing requirements and capital tied up in unsold stock.
      - Faster Delivery Times: Optimized transportation routes and a network of strategically located distribution centers have enabled faster and more reliable delivery to customers, improving BONN’s customer satisfaction and market responsiveness.
      - Scalability: The supply chain model is scalable and can be adjusted to meet future demand increases, new product launches, or geographic expansion. BONN now has the flexibility to grow while maintaining an efficient and cost-effective supply chain.
      - Sustainability: The route and transportation optimization have also led to a reduction in CO2 emissions, making BONN's supply chain more sustainable and aligned with environmental goals.
      
      Overall, the proposed model not only reduces operational costs but also improves BONN's ability to meet consumer demand in an ever-changing market. By adopting data-driven approaches and leveraging advanced algorithms, BONN is well-positioned to lead the market with a robust and agile supply chain.`,
    },
  ],
},
'4': {
  title: "Finding Out Best Possible Locations",
  sections: [
    {
      title: "Copy Method",
      content: `The copy method is used to analyze and replicate successful strategies by examining similar supply chain setups. It involves understanding which existing locations are successfully serving the needs of industries with similar characteristics, such as accessibility, labor, transportation, and other critical factors. By copying successful elements from these locations, we can develop a framework for identifying optimal sites for the supply chain facilities.`,
    },
    {
      title: "Sub Clustering",
      content: `Sub-clustering involves dividing the primary clusters into smaller, more manageable segments to facilitate a more granular analysis and optimization of supply chain locations. This helps in identifying niche areas within broader regions that offer specific advantages for supply chain facilities. The process improves decision-making by allowing more precise targeting of locations based on detailed attributes like demand intensity, transportation logistics, and labor availability.`,
    },
    {
      title: "Objective",
      content: `The objective of sub-clustering is to refine the initial clustering process by dividing larger regions into smaller sub-clusters, enabling more targeted analysis for optimal location identification. By doing this, the supply chain model can better account for local differences within the broader region, which ultimately leads to improved efficiency and cost-effectiveness.`,
    },
    {
      title: "Implementation",
      content: `The sub-clustering process involves several key steps:
      
      1. **Finding Optimal Sub-Clusters**: The silhouette score method was used to determine the optimal number of sub-clusters. This method evaluates how well each data point fits within its assigned cluster compared to others, ensuring that sub-clusters are as cohesive as possible.
      2. **Assigning Sub-Cluster Labels**: Based on the silhouette score analysis, the primary clusters were subdivided into smaller sub-clusters, each representing a distinct region with specific logistical and operational characteristics.
      3. **Calculating Weighted Centers of Gravity**: The weighted center of gravity for each sub-cluster was calculated using demand data to ensure that the final locations are optimized for both accessibility and demand fulfillment.
      
      This approach creates a more precise and targeted distribution network by ensuring that each sub-cluster is optimized for supply chain functionality.`,
    },
    {
      title: "Visualization Output",
      content: `Once the sub-clusters were created and weighted centers of gravity were calculated, the results were visualized on a map. The visualization clearly highlighted the potential locations for the supply chain facilities, allowing for an intuitive understanding of which regions are best suited for optimization efforts. This step provided a clear overview of how each sub-cluster's characteristics align with the supply chain goals, such as minimizing transportation costs, optimizing labor availability, and improving logistical efficiency.`,
    },
  ],
},

'5': {
  title: "Third Party vs Self-Sufficient Logistics",
  sections: [
    {
      title: "Introduction",
      content: `A logistics network can either rely on third-party providers (3PL) or maintain self-sufficient operations. The choice depends on factors such as cost efficiency, flexibility, and control over the supply chain.`,
    },
    {
      title: "Third Party Logistics",
      content: `Third-party logistics involves outsourcing transportation, warehousing, and distribution activities to specialized companies. Here's a breakdown of the pros and cons of this model:`,
    },
    {
      title: "Pros of Third Party Logistics",
      content: `1. **Expertise and Scalability**: Third-party providers often have advanced infrastructure and technology, improving efficiency.
      2. **Cost Efficiency**: They aggregate demand, reducing per-unit costs, particularly for small-scale operations.
      3. **Focus on Core Business**: Companies can concentrate on production and customer engagement instead of managing logistics.`,
    },
    {
      title: "Cons of Third Party Logistics",
      content: `1. **Loss of Control**: Reduced oversight on operations might affect service quality.
      2. **Dependency**: Over-reliance on third parties could lead to disruptions if their operations are hampered.
      3. **Data Security**: Sharing data with third parties can risk confidentiality.`,
    },
    {
      title: "Self-Sufficiency in Logistics",
      content: `This approach involves owning and operating the logistics network, including vehicles, warehouses, and staff. Here are the pros and cons of this model:`,
    },
    {
      title: "Pros of Self-Sufficiency",
      content: `1. **Full Control**: Companies can customize operations according to specific needs.
      2. **Brand Reputation**: Consistent service enhances customer trust.
      3. **Data Ownership**: Sensitive information stays within the organization.`,
    },
    {
      title: "Cons of Self-Sufficiency",
      content: `1. **High Initial Investment**: Requires significant capital for purchasing and maintaining assets.
      2. **Complexity**: Managing logistics operations can divert focus from core activities.
      3. **Limited Flexibility**: Scaling up or down in response to demand changes can be challenging.`,
    },
    {
      title: "Comparing Third-Party and Self-Sufficient Logistics Using Data",
      content: `The dataset includes data on vehicles, capacity, and costs, providing insight into which model might work best for different supply chain needs. Below are some key observations and analyses based on the provided data:`,
    },
    {
      title: "Key Observations from the Dataset",
      content: `1. **Eicher Pro 3015 Reefer**: High capacity (5.5 tons/trip), moderate operating cost.
      2. **Tata 407 Gold SFC**: Medium capacity (2.2 tons/trip), lower operating cost.
      3. **Ashok Leyland Dost**: Low capacity (1.25 tons/trip), lowest cost per trip.`,
    },
    {
      title: "Third Party Logistics Analysis",
      content: `- **Fixed Costs**: Third-party logistics avoids fixed costs, as third parties bear the vehicle and infrastructure costs.
      - **Operational Costs**: Operational costs, such as per-trip costs, fluctuate based on market conditions, which could result in cost savings or increases depending on usage.`,
    },
    {
      title: "Self-Sufficiency Logistics Analysis",
      content: `- **Fixed Costs**: Self-sufficiency logistics requires substantial initial investments (e.g., Rs. 66,00,000 for the Eicher Pro).
      - **Operating Costs**: Operating costs are predictable but need efficient vehicle utilization to stay competitive.`,
    },
    {
      title: "Final Verdict",
      content: `Based on the dataset:
      - For short-term or flexible demand, **third-party logistics** offers a cost-effective and scalable solution.
      - For long-term and stable demand, **self-sufficiency** provides better control and consistent quality, despite higher initial investments.
      
      **Recommendations**:
      1. If initial capital is constrained or the logistics network is geographically dispersed, **opt for third-party logistics**.
      2. For critical operations requiring high reliability, consider **self-sufficiency**, focusing on high-capacity vehicles like the **Eicher Pro 3015 Reefer**.`,
    },
  ]
},

'6': {
  title: "Logistics and Planning",
  sections: [
    {
      title: "Provider Comparison Table",
      content: `Here’s a comparison of third-party logistics providers based on various factors like cost, capacity, and service areas:`,
      table: {
        headers: [
          "Provider Name", "Cost per KM", "Max Capacity", "Lead Time", "Serviceability Coverage Area", "Suitable for", "Best in which State?"
        ],
        rows: [
          ["Gati Logistics", "45", "2000 kg", "1-2 days", "Uttar Pradesh, Madhya Pradesh, Punjab, Rajasthan", "Factory-Warehouse", "Uttar Pradesh"],
          ["Delhivery", "40", "750 kg", "3 days", "Rajasthan, Haryana, NCT of Delhi", "Warehouse-Destination", "Rajasthan"],
          ["Blue Dart", "50", "1000 kg", "2 days", "Punjab, Haryana, NCT of Delhi", "Warehouse-Destination", "Haryana"],
          ["Rivigo", "42", "1500 kg", "1 day", "Jammu & Kashmir, Himachal Pradesh, Uttarakhand", "Flexible", "Jammu and Kashmir"],
          ["Safexpress", "55", "1200 kg", "2-3 days", "Uttar Pradesh, Uttarakhand, Madhya Pradesh", "Factory-Warehouse", "Madhya Pradesh"],
          ["Om Logistics", "48", "1800 kg", "1-2 days", "Uttar Pradesh, Haryana, Rajasthan, NCT of Delhi", "Flexible", "Uttar Pradesh"],
          ["TCI Freight", "43", "3000 kg", "2-3 days", "Punjab, Haryana, Uttar Pradesh", "Factory-Warehouse", "Punjab"],
          ["Spoton Logistics", "46", "1200 kg", "1-2 days", "Rajasthan, Madhya Pradesh, Delhi", "Factory-Warehouse", "Madhya Pradesh"]
        ]
      }
    },
    {
      title: "Vehicle Comparison Table",
      content: `The following table provides a comparison of vehicles used in self-sufficient logistics operations:`,
      table: {
        headers: [
          "Vehicle Name", "Capacity per Trip (Tons)", "Trips (Total)", "Total Capacity Used (Tons)", "Qty", "Total Fixed Cost (Rs.)", "Total Operating Cost (Rs.)", "Location"
        ],
        rows: [
          ["Eicher Pro 3015 Reefer", "5.5", "6 (3x2 days)", "33", "3", "66,00,000", "6,30,000", "Chittogarh"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "6", "75,00,000", "4,05,000", ""],
          ["Ashok Leyland Dost", "1.25", "6", "7.5", "5", "37,50,000", "1,35,000", ""],
          ["Eicher Pro 3015 Reefer", "5.5", "6", "33", "5", "1,10,00,000", "10,50,000", "Raebareli"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "10", "1,25,00,000", "6,75,000", ""],
          ["Mahindra Bolero Pik-Up", "1.5", "6", "9", "8", "64,00,000", "7,20,000", ""],
          ["Eicher Pro Reefer", "2", "6", "12", "6", "72,00,000", "12,00,000", "Ludhiana"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "7", "87,50,000", "8,10,000", ""],
          ["Mahindra Supro Maxitruck", "1", "6", "6", "6", "33,00,000", "2,64,000", ""]
        ]
      }
    }
  ]
},
'7': {
  title: "Network Design and Cost Analysis",
  sections: [
    {
      title: "Proposed Network Layout: Version 1",
      content: `The proposed network adopts a hybrid direct delivery model. Plants supply nearby regions directly, while distant areas are serviced via warehouses. This model addresses challenges such as backtracking and high transportation costs while optimizing logistics management.`,
      challengesAddressed: [
        "Reduced Backtracking: Eliminates unnecessary routing through warehouses for nearby regions.",
        "Lower Transportation Costs: Optimized routes reduce fuel consumption and delivery times.",
        "Simplified Logistics Management: Reduces the number of trucks required, cutting operational complexity."
      ],
      visualization: `The layout shows direct connections between plants and nearby regions while maintaining a hub-and-spoke model for distant areas.`
    },
    {
      title: "Vehicle Comparison Table",
      content: `The following table provides a comparison of vehicles used in self-sufficient logistics operations:`,
      table: {
        headers: [
          "Vehicle Name", "Capacity per Trip (Tons)", "Trips (Total)", "Total Capacity Used (Tons)", "Qty", "Total Fixed Cost (Rs.)", "Total Operating Cost (Rs.)", "Location"
        ],
        rows: [
          ["Eicher Pro 3015 Reefer", "5.5", "6 (3x2 days)", "33", "3", "66,00,000", "6,30,000", "Chittogarh"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "6", "75,00,000", "4,05,000", ""],
          ["Ashok Leyland Dost", "1.25", "6", "7.5", "5", "37,50,000", "1,35,000", ""],
          ["Eicher Pro 3015 Reefer", "5.5", "6", "33", "5", "1,10,00,000", "10,50,000", "Raebareli"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "10", "1,25,00,000", "6,75,000", ""],
          ["Mahindra Bolero Pik-Up", "1.5", "6", "9", "8", "64,00,000", "7,20,000", ""],
          ["Eicher Pro Reefer", "2", "6", "12", "6", "72,00,000", "12,00,000", "Ludhiana"],
          ["Tata 407 Gold SFC", "2.2", "6", "13.2", "7", "87,50,000", "8,10,000", ""],
          ["Mahindra Supro Maxitruck", "1", "6", "6", "6", "33,00,000", "2,64,000", ""]
        ]
      }
    }
  ]
},


  "8": {
    "title": "Network Design and Cost Analysis",
    "sections": [
      {
        "title": "Proposed Network Layout",
        "content": "Improvements made in the network design include the introduction of clustering and sub-clustering techniques using AI/ML models, triangular distribution models for direct supply, and warehouses retained for distant regions or emergencies.",
        "subsections": [
          {
            "title": "Improvements Made",
            "content": [
              "Introduced clustering and sub-clustering techniques using AI/ML models to group regions based on demand and proximity.",
              "Formed triangular regions around each plant, ensuring direct supply from the plant to areas within the triangle.",
              "Warehouses were retained for distant regions or as backup for emergency supplies."
            ]
          },
          {
            "title": "Key Changes",
            "content": [
              "Triangular Distribution Model: Each plant was connected to regions forming a triangle, minimizing overlapping routes.",
              "Direct Supply: Areas close to plants received direct supply, eliminating the need for intermediate warehousing.",
              "Demand Forecasting: AI/ML-based centroid clustering was used to predict demand patterns, ensuring accurate distribution planning."
            ]
          },
          {
            "title": "Benefits Achieved",
            "content": [
              "Cost Reduction: Direct routes and clustering reduced transportation costs significantly compared to Version 1.",
              "Time Efficiency: Shorter routes and fewer backtracking trips saved time, improving delivery schedules.",
              "Resource Optimization: The need for fewer trucks and less reliance on warehouses lowered overall operational expenses."
            ]
          },
          {
            "title": "Visualization",
            "content": "The image of Version 2 shows the triangular clusters with direct routes from plants to regions, highlighting the reduction in backtracking and unnecessary routes."
          }
        ]
      },
      {
        "title": "Cost Analysis",
        "content": "Total Cost Version 2 = Cost of Transportation to Warehouse + Cost of Warehouse to Sub-Districts + Fixed Costs",
        "subsections": [
          {
            "title": "Cost of Plant to Warehouse",
            "table": {
              "headers": ["Origin", "Weighted Distance Per Day", "Weighted Distance Per Month", "Monthly Cost", "Percentage Change"],
              "rows": [
                ["Chittaurgarh", "7009734", "210,292,010", "₹3,154,380", "-9.54%"],
                ["Raibareli", "10787391", "323,621,734", "₹4,854,326", "-21.73%"],
                ["Sub-Total", "", "", "₹8,008,706", "-17.34%"]
              ]
            }
          },
          {
            "title": "Cost of Warehouse to Sub Districts",
            "table": {
              "headers": ["Origin", "Weighted Distance Per Day", "Weighted Distance Per Month", "Monthly Cost", "Percentage Change"],
              "rows": [
                ["Rajasmand", "1962548", "58,876,429", "₹883,146", "-14.10%"],
                ["Hardoi, UP", "4225840", "126,775,191", "₹1,901,628", "-0.72%"],
                ["Sultanpur, UP", "3579654", "107,389,626", "₹1,610,844", "-22.85%"],
                ["Katni, MP", "1434226", "43,026,774", "₹645,402", "-20.22%"],
                ["Sheopur, MP", "1712804", "51,384,134", "₹770,762", "-21.36%"],
                ["Sehore, MP", "1978810.46", "59,364,314", "₹890,465", "-8.26%"],
                ["Chittaurgarh", "394724", "11,841,732", "₹177,626", ""],
                ["Raibareli", "2491402", "74,742,050", "₹1,121,131", ""],
                ["Sub-Total", "", "", "₹5,041,020", "-35.30%"]
              ]
            }
          },
          {
            "title": "Rental and Maintenance Cost",
            "table": {
              "headers": ["District", "Warehouse Size (sq ft)", "Monthly Rent per sq ft (₹)", "Monthly Rental Cost", "Percentage Change"],
              "rows": [
                ["Hardoi", "84,028.59", "14", "₹1,176,400", "-2.97%"],
                ["Katni", "28,518.82", "17", "₹484,820", "-19.44%"],
                ["Rajsamand", "39,024.22", "18", "₹702,436", "-3.41%"],
                ["Sehore", "39,347.60", "14", "₹550,866", "1.41%"],
                ["Sheopur", "34,058.21", "20", "₹681,164", "-20.79%"],
                ["Sultanpur", "71,179.53", "15", "₹1,067,693", "-40.24%"],
                ["Chittaurgarh", "7,848.89", "15", "₹117,733", "-97.95%"],
                ["Raibareli", "49,540.20", "15", "₹743,103", "-96.80%"],
                ["Sub-Total", "", "", "₹4,663,380", "-18.63%"]
              ]
            }
          },
          {
            "title": "Total Cost",
            "content": "The total cost for Version 2 is ₹17,713,106, with a reduction of 23.69%."
          }
        ]
      },
      {
        "title": "Pros and Cons",
        "subsections": [
          {
            "title": "Pros",
            "content": [
              "Cost Optimization: Direct routing and triangular clustering minimize transportation costs by eliminating redundant routes.",
              "Efficient Clustering: Demand fulfillment within triangular clusters reduces the complexity of operations.",
              "Reduced Delivery Time: Direct supply to nearby areas from plants ensures faster delivery and better resource utilization.",
              "Improved Scalability: The triangular model allows flexibility to adapt to varying demands in specific regions."
            ]
          },
          {
            "title": "Cons",
            "content": [
              "Initial Complexity: Requires advanced planning, AI/ML clustering, and demand prediction models, which can be challenging to implement initially.",
              "Dependency on Accurate Data: The success of the optimization depends heavily on accurate demand forecasts and clustering algorithms.",
              "High Initial Investment: Setting up optimized transportation routes and implementing AI-based models may require significant initial investment."
            ]
          }
        ]
      }
    ]
  }




  };

  const chapter = chaptersContent[id];

  if (!chapter) {
    return <div>Chapter not found!</div>;
  }

  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-4xl font-bold mb-8 mt-24">{chapter.title}</h1>
  <div className="space-y-6">
    {chapter.sections.map((section, index) => (
      <div key={index}>
        <h2 className="text-2xl font-semibold text-blue-600">{section.title}</h2>
        <p className="text-lg text-gray-700">{section.content}</p>
        {/* Check if table exists in the section */}
        {section.table && (
          <div className="overflow-x-auto mt-4">
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead className="bg-gray-100">
                <tr>
                  {section.table.headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 px-4 py-2 text-sm text-gray-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
);
};

export default ChapterDetail;
