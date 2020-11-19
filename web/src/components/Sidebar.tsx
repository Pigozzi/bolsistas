import React from 'react'
import { FiUsers, FiPlus, FiStar, FiLogOut, FiFilm, FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import '../styles/components/sidebar.css'

export default function Sidebar() {
    return (
        <aside className="app-sidebar">
            <footer>
                <Link to="/cadastro" type="button" className="success">
                    <FiPlus size={24} color="#FFF" />
                </Link>
                <Link to="/cadastrar/bolsistas" type="button">
                    <FiUserPlus size={24} color="#FFF" />
                </Link>
                <Link to="/bolsistas" type="button">
                    <FiUsers size={24} color="#FFF" />
                </Link>
                <Link to="/cadastrar/espetaculos" type="button">
                    <FiStar size={24} color="#FFF" />
                </Link>
                <Link to="/espetaculos" type="button">
                    <FiFilm size={24} color="#FFF" />
                </Link>
                <div className="sair">
                    <Link to="/" type="button" className="logout">
                        <FiLogOut size={24} color="#FFF" />
                    </Link>
                </div>
            </footer>
        </aside>
    )
}