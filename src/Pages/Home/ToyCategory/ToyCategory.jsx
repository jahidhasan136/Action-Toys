import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCategory = () => {
    return (
        <div>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Action Toys</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Avengers Toys</Tab>
                            <Tab>Marvel Toys</Tab>
                            <Tab>Star War Toys</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default ToyCategory;