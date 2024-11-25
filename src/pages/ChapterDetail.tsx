import { useParams } from 'react-router-dom';

// Define types for chapter and section content
interface Section {
  title: string;
  content: string;
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
