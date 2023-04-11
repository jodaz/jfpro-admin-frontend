const scrollbarStyles = {
    scrollbarColor: "#E5E5E5 #E5E5E5",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        backgroundColor: "#E5E5E5",
        width: '8px',
    },
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: 8,
        backgroundColor: "#959595",
        minHeight: 12,
        border: "1px solid #959595",
    },
    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#959595",
    },
    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#959595",
    },
    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#959595",
    }
}

export default scrollbarStyles
