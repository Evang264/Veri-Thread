"use client";

import Image from "next/image";


import shirt from '../global/isseymiyake2.png'
import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <section>
            <div className="flex justify-center w-full font-ppneutral">
                <Image className="mt-4 mb-4" src={shirt} alt="shirt" width={300} height={800} />
            </div>
            <div>
                <div className="border-b border-gray-200 er">
                    <nav className="flex gap-x-1 justify-center px-20" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button type="button" className={`hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 focus:outline-none focus:text-gray-700 disabled:opacity-50 disabled:pointer-events-none ${activeTab === 'about' ? 'active' : ''}`} id="card-type-tab-item-1" aria-selected={activeTab === 'about'} onClick={() => setActiveTab('about')} role="tab">
                            About
                        </button>
                        <button type="button" className={`hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 focus:outline-none focus:text-gray-700 disabled:opacity-50 disabled:pointer-events-none ${activeTab === 'journey' ? 'active' : ''}`} id="card-type-tab-item-2" aria-selected={activeTab === 'journey'} onClick={() => setActiveTab('journey')} role="tab">
                            Journey
                        </button>
                        <button type="button" className={`hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 focus:outline-none focus:text-gray-700 disabled:opacity-50 disabled:pointer-events-none ${activeTab === 'design' ? 'active' : ''}`} id="card-type-tab-item-3" aria-selected={activeTab === 'design'} onClick={() => setActiveTab('design')} role="tab">
                            Design
                        </button>
                    </nav>
                </div>

                <div className="text-gray-500 mt-3">
                    {activeTab === 'about' && (
                        <div id="card-type-tab-1" role="tabpanel" aria-labelledby="card-type-tab-item-1">
                            <p className="flex justify-left w-full text-left text-lg p-2 mt-4"><strong>Issey Miyake Cream Oversize shirt</strong></p>
                            <p className="flex justify-left w-full text-left p-2"><strong>Ethical Rating:</strong> 8/10</p>
                            <p className="flex justify-left w-full text-left p-2"><strong>Origin:</strong> Japan</p>

                            <p className="flex justify-left w-full text-left p-2">The shirt features Miyake's signature pleating technique, creating subtle texture and movement, elevating a classic wardrobe staple. Its tailored yet relaxed fit makes it versatile for both formal and casual occasions, while the crisp white color exudes timeless elegance. The shirt reflects Issey Miyake's philosophy of blending art and functionality, making it a perfect choice for those who appreciate understated luxury and modernity.</p>
                            <p className="flex justify-left w-full text-left p-2" ><strong> Blockchain ID:</strong></p>
                            <p className="flex text-balance p-2" >a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3</p>


                        </div>
                    )}
                    {activeTab === 'journey' && (
                        <div id="card-type-tab-2" role="tabpanel" aria-labelledby="card-type-tab-item-2">
                            <p className="text-gray-500">
                                This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
                            </p>
                        </div>
                    )}
                    {activeTab === 'design' && (
                        <div id="card-type-tab-3" role="tabpanel" aria-labelledby="card-type-tab-item-3">
                            <p className="text-gray-500">
                                <p className="text-lg p-4"><strong>Design Philosophy</strong></p>

                                <p className="justify-left p-4 mt-1">Issey Miyake's design philosophy is deeply rooted in the fusion of tradition, innovation, and art. He is renowned for his approach that blurs the boundaries between fashion, technology, and craftsmanship, often redefining what clothing can be. His philosophy centres on several key elements:</p>

                                <p className="justify-left p-4 mt-1"><strong>Sustainability and Ethical Design</strong></p>

                                <p className="justify-left p-4 mt-1"><strong>Innovation through Technology</strong></p>

                                <p className="justify-left p-4 mt-1"><strong>Timelessness and Functionality</strong></p>

                                <p className="justify-left p-4 mt-1"><strong>Respect for Tradition and Craftsmanship</strong></p>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}