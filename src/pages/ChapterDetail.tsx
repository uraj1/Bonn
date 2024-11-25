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
          
              ],
            },
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
