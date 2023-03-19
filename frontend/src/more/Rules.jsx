import React from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
    return (
        <>
            <MetaData title="Quy tắc" />
            <Header />
            <div className='rules' style={{
                padding: "50px 30px",
                display: "flex",
                width: "95%",
                overflow: "hidden"
            }}>
                <ul className='rules'>
                    <span style={{
                        color: "#000",
                        fontSize: "1.3rem",
                        fontWeight: "800",
                        fontFamily: "Roboto",
                    }}>Một số quy tắc:</span>
                    <li>1. Sinh viên có thể đăng kí nhiều đề tài cùng lúc
                    </li> 
                    <li>2. Giảng viên có thể giới hạn số sinh viên đăng kí
                    </li>
                </ul>
            </div>
            <Footer />
            <BottomTab />
        </>
    )
}

export default Rules
