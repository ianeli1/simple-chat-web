import type {Story} from "@storybook/react/types-6-0"
import React from "react"
import TabMenu, {TabMenuProps} from "./index"
import { Home, Chat, Settings } from "@material-ui/icons"

export default {
    component: TabMenu,
    title: "Tab Menu"
}

const Template: Story<TabMenuProps> = (a) => <TabMenu {...a} />
const Elements: TabMenuProps["elements"] = [
    {alt: "Home", icon: <Home />},
    {alt: "Chat", icon: <Chat />},
    {alt: "Config", icon: <Settings />}

]


export const Default = Template.bind({})
Default.args = {
    elements: Elements
}

export const Limited_Width = Template.bind({})
Limited_Width.args = {...Default.args}
Limited_Width.decorators = [(Story) => <div style={{width: 300}}><Story /></div>]