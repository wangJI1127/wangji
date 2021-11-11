import {Link, Outlet } from 'react-router-dom';

export const Post = () => {
    return (
        <div style={{ padding: 20 }}>
            <nav>
                <Link to="me">My Profile</Link>
            </nav>
            {/* 渲染任何匹配的子级 */}
            <Outlet />
        </div>
    );
}