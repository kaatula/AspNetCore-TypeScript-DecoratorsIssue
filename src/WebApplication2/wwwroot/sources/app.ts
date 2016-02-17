function collectionItemType(itemType: string) {
    return (target: Object, key: string) => {
        console.log("some work is performed here");
        return;
    }
}

class MyRealClass  {
    @collectionItemType("Rectagle")
    hiddenDimensions: Array<string>;
}