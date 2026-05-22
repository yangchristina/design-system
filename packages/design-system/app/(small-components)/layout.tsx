'use client'
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
            {children}
        </section>
    );
}
