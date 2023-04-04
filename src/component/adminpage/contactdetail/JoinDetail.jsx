import React, { useEffect, useState } from "react";
import './contactdetail.css';
import axios from "axios";

export default function ContactDetail() {
    const [contact, setContact] = useState([]);
    console.log(contact);
    const apiURL =
        "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getFileDetail";
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(apiURL, {
                    params: {
                        path: 'getContact',
                    },
                })
                setContact(response.data.filedetail);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetail();
    }, []);
    return (
        <div id='condetail'>
            <h3>Join Database</h3>
            <div className="data">
                <div className="head">
                    <div>
                        Name
                    </div>
                    <div>
                        Message
                    </div>
                    <div>
                        Phone Number
                    </div>
                </div>
                {contact.length > 0  && contact.filter((x)=>x.actionFrom === 'join').map((cont, index) => (
                    <div key={index} className="body">
                        <div>{cont.name}</div>
                        <div>{cont.message}</div>
                        <div>{cont.phoneNumber}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}