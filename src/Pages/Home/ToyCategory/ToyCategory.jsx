import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import img3 from '../../../assets/toys/img3.jpg'
import img8 from '../../../assets/toys/img8.jpg'
import img4 from '../../../assets/toys/img4.jpg'
import img5 from '../../../assets/toys/img5.jpg'
import img1 from '../../../assets/toys/img1.jpg'
import img11 from '../../../assets/toys/img11.jpg'
import ToyCardCategory from '../ToyCardCategory/ToyCardCategory';


const ToyCategory = () => {
    const [rating, setRating] = useState(3);
    const [toys, setToys] = useState([])
    const [category, setCategory] = useState('all toys')

    useEffect(() => {
        fetch(`/public/Data/ToysData.json`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                if (data.length) {
                    const remaining = data.filter(toy => toy.subcategory === category)
                    setToys(remaining)
                }
            })
    }, [category])

    return (
        <div className="max-w-[1240px] mx-auto">
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList className="text-center">
                    <Tab>Action Toys</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="grid justify-center">
                        <TabList className="text-center">
                            <Tab onClick={()=> setCategory('avengers')}>Avengers Toys</Tab>
                            <Tab onClick={()=> setCategory('marvel')}>Marvel Toys</Tab>
                            <Tab onClick={()=> setCategory('starwars')}>Star War Toys</Tab>
                        </TabList>
                        <TabPanel className="">
                            {
                                toys.map(toy => <ToyCardCategory key={toy._id} toy={toy}></ToyCardCategory>)
                            }
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