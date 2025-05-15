export default function getRelationsRate(value: 1 | 2 | 3 | 4 | 5) {
    function getColor() {
        switch (value) {
            case 1:
                return 'bg-red-200';
            case 2:
                return 'bg-orange-200';
            case 3:
                return 'bg-yellow-200';
            case 4:
                return 'bg-lime-200';
            case 5:
                return 'bg-green-200'
        }
    }


    const color = getColor();
    const number = value;

    return {
        color, number
    }

}