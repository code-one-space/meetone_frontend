module.exports = {
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    text: {
        fontFamily: "Sen_400Regular",
        fontSize: 20,
        color: "black",
        width: "90%",
    },
    editButton: {
        backgroundColor: "white",
        width: "83%",
        height: 55,
        paddingHorizontal: 17,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    editIcon: {
        position: "absolute",
        right: 15,
    },
    trashContainer: {
        backgroundColor: "black",
        height: 45,
        width: 45,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 3,
    },
    trashButton: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
        right: 15,
    }
}