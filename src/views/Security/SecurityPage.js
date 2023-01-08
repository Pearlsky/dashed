import { useState } from "react";

export default function SecurityPage() {
    const [state] = useState(0);
    return (
        <main className="tab-main "><button>{state.upperCase()}</button></main>
    );
}