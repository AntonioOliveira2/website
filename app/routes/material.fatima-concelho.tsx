import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

export default function FatimaConcelho() {

    const [htmlFileString, setHtmlFileString] = useState("");

    async function fetchHtml() {
        const response = await fetch('/website/estatistica.html');
        const res = await response.text();

        if (res) {
            setHtmlFileString(res);
        }
    }

    useEffect(() => {
      fetchHtml();
    }, []);

    return (
        parse(htmlFileString)
    );
}