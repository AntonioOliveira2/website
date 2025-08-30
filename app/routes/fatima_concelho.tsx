import { useEffect, useState } from 'react';
import parseDocument from 'htmlparser2' ;
export default function FatimaConcelho() {

    const [htmlFileString, setHtmlFileString] = useState("");

    async function fetchHtml() {
        const response = await fetch('estatistica.html');
        const res = await response.text();

        if (res) {
            setHtmlFileString(res);
        }
    }

    useEffect(() => {
      fetchHtml();
    }, []);

    return (
        <div className="w-full h-screen">
        <iframe
            src="/notebook.html"
            title="Jupyter Notebook"
            className="w-full h-full border-none"
        />
        </div>
    );
}