import React from 'react'
import { FiUsers, FiPlus, FiStar, FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import '../styles/components/sidebar.css'

export default function Sidebar() {

    return (
        <aside className="app-sidebar">
            <footer>
                <Link to="/cadastrar/bolsista" type="button">
                    <FiPlus size={24} color="#FFF" />
                </Link>
                <Link to="/bolsistas" type="button">
                    <FiUsers size={24} color="#FFF" />
                </Link>
                <Link to="/cadastrar/espetaculo" type="button">
                    <FiStar size={24} color="#FFF" />
                </Link>
                <Link to="/espetaculos" type="button">
                    <FiStar size={24} color="#FFF" />
                </Link>
                <div className="voltar">
                    <Link to="/" type="button" className="logout">
                        <FiLogOut size={24} color="#FFF" />
                    </Link>
                </div>
            </footer>
        </aside>
    )
}