import React from 'react';

type PropsPessoa = {
    nome: string;
    idade: number;
    cidade?: string;
    children?: React.ReactNode;
};

export default function Pessoa({ nome, idade, cidade, children }: PropsPessoa) {
    return (
        <>
            <h2>Pessoa</h2>
            <p>
                {nome}, {idade}, {cidade}
            </p>
            {   
                children ? <h3>Filhos</h3> : '' 
            }
            { children }
        </>
    );
}