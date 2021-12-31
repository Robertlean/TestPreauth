export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(){
        this.items.map( element => {
            (element.name != 'Aged Brie' && element.name != 'Backstage passes to a TAFKAL80ETC concert') ? 
                element.quality < 0 ?
                (element.name != 'Sulfuras, Hand of Ragnaros') ? element.quality = element.quality-- : ""
                :""
            : element.quality < 50 ? (element.quality = element.quality++, (element.name == 'Backstage passes to a TAFKAL80ETC concert' ?
                    element.sellIn < 11 ? 
                        element.quality < 50 ? element.quality++ : ""
                    :"" :
                    element.sellIn < 6 ?
                        element.quality < 50 ? element.quality++ : ""
                    : ""
                
            ))            
            : "";

            (element.name != 'Sulfuras, Hand of Ragnaros') ? element.sellIn = element.sellIn - 1 : ""

            element.sellIn < 0
                element.name != 'Aged Brie' ? 
                    element.name != 'Backstage passes to a TAFKAL80ETC concert' ?
                        element.quality > 0 ?
                        element.name != 'Sulfuras, Hand of Ragnaros' ? element.quality-- : ""
                        : ""
                    : ""
                : element.quality < 50 ? element.quality++
            : ""

        })
        return this.items;
    }

    
}
