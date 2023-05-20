import '@smastrom/react-rating/style.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
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
                <h1 className="text-5xl font-bold text-center mb-10">Shop By Category</h1>
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