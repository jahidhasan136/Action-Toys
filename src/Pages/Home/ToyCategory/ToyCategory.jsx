// import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import img3 from '../../../assets/toys/img3.jpg'
import img8 from '../../../assets/toys/img8.jpg'
import img4 from '../../../assets/toys/img4.jpg'
import img5 from '../../../assets/toys/img5.jpg'
import img1 from '../../../assets/toys/img1.jpg'
import img11 from '../../../assets/toys/img11.jpg'
import ToyCardCategory from '../ToyCardCategory/ToyCardCategory';


const ToyCategory = () => {
    // const [rating, setRating] = useState(3);
    const [toys, setToys] = useState([])
    const [category, setCategory] = useState('avengers')
    // console.log(category)
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.length) {
                    const remaining = data.filter(toy => toy.subcategory === category)
                    setToys(remaining.slice(0, 2))
                    console.log(remaining)
                }
            })
    }, [category])

    return (
        <div className="max-w-[1240px] mx-auto my-20">
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList className="text-center">
                    <Tab>Action Toys</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="grid justify-center space-y-12">
                        <TabList className="text-center space-y-4">
                            <Tab onClick={() => setCategory('avengers')}>Avengers Toys</Tab>
                            <Tab onClick={() => setCategory('marvel')}>Marvel Toys</Tab>
                            <Tab onClick={() => setCategory('starwars')}>Star War Toys</Tab>
                        </TabList>
                        <TabPanel className="">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {
                                    toys.map(toy => <ToyCardCategory key={toy._id} toy={toy}></ToyCardCategory>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                                {
                                    toys.map(toy => <ToyCardCategory key={toy._id} toy={toy}></ToyCardCategory>)
                                }
                        </TabPanel>
                        <TabPanel>
                            {
                                toys.map(toy => <ToyCardCategory key={toy._id} toy={toy}></ToyCardCategory>)
                            }
                        </TabPanel>
                    </Tabs>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default ToyCategory;