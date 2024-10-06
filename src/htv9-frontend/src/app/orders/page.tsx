export default function ProductTimeline() {
    const steps = [
        {
            title: "Raw material sourcing",
            description: "Cotton Sourced from Chetna Organic in India",
        },
        {
            title: "Manufacturing",
            description: "Fair Trade and Global Organic Textile Standard (GOTS) certified",
        },
        {
            title: "Distribution",
            description: "Packed in containers and shipped via ocean freight from Indian ports",
        },
        {
            title: "Customs and Import",
            description: "Cleared through customs for import to various countries",
        },
    ];

    return (
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 font-departure">
            <h2 className="text-2xl mb-4">Orders</h2>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                        {/* Dots and Line */}
                        <div className="flex flex-col items-center mr-4">
                            {/* Dot */}
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                            {/* Line (only for non-final steps) */}
                            {index !== steps.length - 1 && (
                                <div className="w-px h-full bg-gray-700 my-1"></div>
                            )}
                        </div>

                        {/* Text Content */}
                        <div>
                            <h3 className="font-bold text-lg underline">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
