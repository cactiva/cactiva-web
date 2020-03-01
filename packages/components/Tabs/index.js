import Tabs, { TabPane } from "rc-tabs";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "@libs/elements/Box";
import Text from "@libs/elements/Text";
import Heading from "@libs/elements/Heading";
import Image from "@libs/elements/Image";
import Container from "@packages/components/UI/Container";
import GlideCarousel from "@packages/components/GlideCarousel";
import GlideSlide from "@packages/components/GlideCarousel/glideSlide";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import "rc-tabs/assets/index.css";

const TabComponent = props => (
  <Tabs
    defaultActiveKey={props.activeItem}
    onChange={props.callback}
    renderTabBar={() => <ScrollableInkTabBar />}
    renderTabContent={() => <TabContent animated={props.animation} />}
  >
    {props.items.map((item, index) => (
      <TabPane tab={item.title} key={index}>
        {item.description}
      </TabPane>
    ))}
  </Tabs>
);

export default TabComponent;
