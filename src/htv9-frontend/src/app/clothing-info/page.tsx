"use client";

import Image from "next/image";


import shirt from '../global/isseymiyake2.png'
import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <section>
            <div className="flex justify-center w-full">
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

                <div className="mt-3">
                    {activeTab === 'about' && (
                        <div id="card-type-tab-1" role="tabpanel" aria-labelledby="card-type-tab-item-1">
                            <h2 className="flex justify-left w-full text-left text-3xl p-2 mt-4">Issey Miyake Cream Oversize shirt</h2>
                            <p className="flex justify-left w-full text-left p-2"><strong>Ethical Rating:</strong> 8/10</p>
                            <p className="flex justify-left w-full text-left p-2"><strong>Origin:</strong> Japan</p>
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
                                This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}