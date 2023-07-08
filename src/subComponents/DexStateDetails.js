import React from 'react';
import { Stack, Button, Popover, OverlayTrigger, Form } from "react-bootstrap";
import { motion } from "framer-motion";

import pic from "../assets/Images/spaceman.png"
import Chain from './Chain';
import Account from './Account';

const DexStateDetails = (props) => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>Settings</Popover.Header>
      <Popover.Body>
        <Form>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Dark Mode"
          />
          <hr />
          <Form.Group >
            <img src={pic} height={"30px"} width={"30px"} />
            <Form.Label>Language</Form.Label>

            <Form.Select>
              <option>English</option>
              <option>French</option>
              <option>Russian</option>
              <option>Swahili</option>
              <option>Arabic</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Popover.Body>
    </Popover>
  );

  return (
    <>

        <motion.div
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Chain set_show_alert={props.set_show_alert} set_alert_data={props.set_alert_data} set_active_chain={props.set_active_chain}/>
            <Account set_show_alert={props.set_show_alert} set_alert_data={props.set_alert_data}/>

            {/* <div>
              <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="success">
                  &#9881;


                </Button>
              </OverlayTrigger>

            </div> */}

          </Stack>

        </motion.div>
    </>
  );
}

export default DexStateDetails;