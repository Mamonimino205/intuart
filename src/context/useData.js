import { useState } from "react";

export default function useData() {
    const [artBoards, setArtBoards] = useState([]);

    return {
        artBoards,
        setArtBoards
    }
}