document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Apple', price: 100, image: 'https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg' },
        { id: 2, name: 'Banana', price: 70, image: 'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg' },
        { id: 3, name: 'Carrot', price: 40, image: 'https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg' },
        { id: 4, name: 'Milk', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7yYcq0aeJTah03y2hce573Y0p9qltHup9g&s' },
        { id: 5, name: 'Eggs', price: 10, image: 'https://www.heart.org/-/media/Images/News/2018/August-2018/0816Eggs_SC.jpg?h=501&w=800&sc_lang=en' },
	{ id: 6, name: 'Cabbage', price: 40, image: 'https://farmsbazaar.com/image/cache/catalog/farms%20fresh%20images%20/Fresh%20vegetables/Cabbage/CABBAGE%202-700x700.jpg' },
	{ id: 7, name: 'Potato', price: 50, image: 'https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=' },
	{ id: 8, name: 'Tomato', price:50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1eR6hCYXMgyNY5MhA4Xsq8R7Yk0dOnb7Aw&s' },
	{ id: 9, name: 'Onion', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiXMIy57zv_DwAe42vbA-34SdQbdyD7LTmA&s' },
	{ id: 10, name: 'Ginger', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74GAVP8SOVqLfIzrkKZxrQcnIMe6Jq2t5rA&s' },
	{ id: 11, name: 'Garlic', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWy0HyqAPyeV2F6GnB0jxnS9Js5LLRruS0A&s' },
	{ id: 12, name: 'Coriander', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MvTG49ESkDphcQs6xgbgq1HZxcH__Ls-OA&s' },
	{ id: 13, name: 'Cucumber', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgAZ1engGpzhhLduGZjazsXj-nrXm_AZe3Q&s' },
	{ id: 14, name: 'Cauliflower', price: 50, image: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/cauliflower.jpg' },
	{ id: 15, name: 'Capsicum', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAwwtS3TnbbVL-8L4EQR-J6KgCvxAzxVIYQ&s' },
	{ id: 16, name: 'Pomegranate', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrtRMa_X6woPv9WH1QrM-ATHWj7YoS6KoPw&s' },
	{ id: 17, name: 'Mango', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTFpU6VqRSJ4-y7hmbMq6rtEesJ3uGgxhPg&s' },
	{ id: 18, name: 'Orange', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPzEfF0KveKTjwxZ5kvANQ-A0D0qfYJNNGg&s' },
	{ id: 19, name: 'Coconut', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zZ79xJZZAm6s3ag7giNH-lXRPOd2MVS90g&s' },
	{ id: 20, name: 'Kiwi', price: 100, image: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg' },
	{ id: 21, name: 'Papaya', price: 60, image: 'https://cdn.shopaccino.com/rootz/products/picture1-798125_m.jpg?v=492' },
	{ id: 22, name: 'Watermelon', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVzprtlu4ddFH9gVSP773_Wa9Z7NZ_iMxug&s' },
	{ id: 23, name: 'Guava', price: 30, image: 'https://fruitboxco.com/cdn/shop/products/asset_19_800x.jpg?v=1594383262' },
	{ id: 24, name: 'Mosambi', price: 40, image: 'https://www.jiomart.com/images/product/original/590006806/mosambi-3-kg-pack-product-images-o590006806-p590032918-0-202203150754.jpg?im=Resize=(1000,1000)' },
	{ id: 25, name: 'Blueberry', price: 65, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5F0PhJ3ebNpLGqOutpryTiZVwNdR_Rj5sbA&s' },
	{ id: 26, name: 'Dragon Fruit', price:150 , image: 'https://organicmandya.com/cdn/shop/files/DragonFruit.jpg?v=1721374720&width=1000' },
	{ id: 27, name: 'Avocado', price: 50, image: 'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg' },
	{ id: 28, name: 'Pineapple', price: 80, image: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg' },
	{ id: 29, name: 'Grapes', price: 65, image: 'https://rukminim2.flixcart.com/image/850/1000/k8g8knk0/plant-seed/f/d/s/30-grape-fruit-seeds-seeds-for-a-garden-kitchen-garden-quinergys-original-imafqgxjvuc8rvmr.jpeg?q=90&crop=false' },
	{ id: 30, name: 'Dates', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-N2AYIsQcKHccbJPs_IRRXk69FpvL-UdwfQ&s' },
	{ id: 31, name: 'Almonds', price: 300, image: 'https://www.ofi.com/content/dam/olamofi/products-and-ingredients/nuts/nuts-images-webp/almonds-new.webp' },
	{ id: 32, name: 'Apricot', price: 150, image: 'https://m.media-amazon.com/images/I/51P9O7twB2L._AC_UF1000,1000_QL80_.jpg' },
	{ id: 33, name: 'Cashew', price: 350, image: 'https://www.kashmironlinestore.com/cdn/shop/files/roasted_cashew_1.jpg?v=1718944865' },
	{ id: 34, name: 'Raisins', price: 90, image: 'https://satopradhan.com/cdn/shop/products/raisins-golden-dried-grapes-kishmish-200g-100percent-organic-and-natural-sweetener-with-no-sugar-artificial-flavourscolors-or-chemical-preservatives-satopradhan-1-13249986756758_1200x1200_crop_center.jpg?v=1696574880' },
	{ id: 35, name: 'Groundnuts', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsxYO5piC80e7X_RTSAwwpcqLC3zqy1KUZA&s' },
	{ id: 36, name: 'Walnut', price: 400, image: 'https://www.hamiast.com/cdn/shop/files/Kashmiri_Walnut_Snow_White_With_Shell_400_Grams_-_Hamiast-62394.jpg?v=1716692113' },
	{ id: 37, name: 'Curd', price: 30, image: 'https://www.fitterfly.com/blog/wp-content/uploads/2022/11/health-benefits-of-curd-scaled.jpg' },
	{ id: 38, name: 'Ghee', price: 510, image: 'https://www.teamnature.in/cdn/shop/products/CowGheePureTeamnature_1024x.jpg?v=1600232843' },
	{ id: 39, name: 'Oil', price: 150, image: 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg' },
	{ id: 40, name: 'Sugar', price: 45, image: 'https://organicmandya.com/cdn/shop/files/WhiteSugar_2_69728053-debd-4fca-bec8-73e6ce8d0765.jpg?v=1719136094&width=1024' },
    { id: 41, name: 'Honey', price: 400, image: 'https://m.media-amazon.com/images/I/61t3CUyXyeL.jpg' },
    { id: 42, name: 'Brown Bread', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0G4hEyqctOEtsypltijUlTZwcQcvOg9Qn9Q&s' },
    { id: 43, name: 'Cheese', price: 100, image: 'https://3.imimg.com/data3/MT/TA/MY-1482337/sliced-cheese-500x500.jpg' },
    { id: 44, name: 'Yogurt', price: 80, image: 'https://img.freepik.com/premium-vector/drink-yogurt-realistic-set-bottles-berry-yogurt-white-background_80590-7241.jpg?semt=ais_hybrid' },
    { id: 45, name: 'Chicken', price: 150, image: 'https://thumbs.dreamstime.com/b/whole-roasted-chicken-wooden-cutting-board-78354675.jpg' },
    { id: 46, name: 'Fish', price: 600, image: 'https://st4.depositphotos.com/1068090/39894/i/450/depositphotos_398948462-stock-photo-fresh-raw-fish-rudd-isolated.jpg' },
    { id: 47, name: 'Beef', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5qpOnltb2d4vOadEgezCGDeatXU1QzRgow&s' },
    { id: 48, name: 'Pork', price: 350, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMjnir0hq8ZSaFnBYCIG75wWCoR0S69dM2A&s' },
    { id: 49, name: 'Shrimp', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIm81TpvX5xaBna45XCZ0l11M0lEreKpRlg&s' },
    { id: 50, name: 'Tofu', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_dbIf06saVcSaqK2YrLfilneWHd0_sOq-Q&s' },
    { id: 51, name: 'Peanut Butter', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8beJxzs7L79s8Iws5hfD_0M_BmsMSw3Ub3w&s' },
    { id: 52, name: 'Jam', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qyvggo8rx7nySaxy98BLFb3y-6045sgsUg&s' },
    { id: 53, name: 'Green Tea', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVbAhRPYQWTNO8qNjM_8j-E0xYt7ToByzdw&s' },
    { id: 54, name: 'Coffee Beans', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnd6y5VRPMeZ4DD2esvX4aURo9k73aImlLA&s' },
    { id: 55, name: 'Cereal', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUOnwK6GLGTo31yHOKzU_BW2jzuvtk2sDhA&s' },
    { id: 56, name: 'Rice', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJj7LzZ--j4fk3dnke7a5rvTqsPvdl4UP11dGiz3aYKcvRp6cMo0eA19ZCjT53bZsIqU&usqp=CAU' },
    { id: 57, name: 'Pasta', price: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq8FI1rKpbrCyR_qfdLSp-UST3mP2KJ_pfw&s' },
    { id: 58, name: 'Flour', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06kIyAkcD4NVnhOu9g3mrnZ-NCVw40Ss7MQ&s' },
    { id: 59, name: 'Baking Soda', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5U5xQubpiQXCPgcSRK4LglBrMSOGSsjl_A&s' },
    { id: 60, name: 'Salt', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgOB4A4M5g9P2PtfdquArQbHRE39sDu7hEg&s' },
    { id: 61, name: 'Pepper', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_2B37PGRYeUG23OE-boTiUoUc7Q-xQCGXQ&s' },
    { id: 62, name: 'Chili Powder', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CnqgHoLisuzcYdcmdUxRDI94oaHaQhE84A&s' },
    { id: 63, name: 'Turmeric', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPd2EcOwNDjxD20NQtFVlZpUZw3k2HbTBqQ&s' },
    { id: 64, name: 'Oats', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_6xG26jFXpItpsBGHexlYjycnO4w93g00A&s' },
    { id: 65, name: 'Macadamia Nuts', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zV-F6V9VNKF4p77Yw9MyTfkN2DaafcqUJg&s' },
    { id: 66, name: 'Breadsticks', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLo92vjAcyC7TYfhNZqe-x2hKIUmO_NmkTw&s' },
    { id: 67, name: 'Ice Cream', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n-r1qsHIwVmPh6dkUO57vFg5ekUlNsubyQ&s' },
    { id: 68, name: 'Chocolate', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLTISwrua4LT4VXJN0t-vkVE-K-r4OcnDww&s' },
    { id: 69, name: 'Cake', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemd4UM2xM5s-zCKomhp1Ur8i6UyaPb2ijuQ&s' },
    { id: 70, name: 'Cookies', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzISbVinPqO03oy76VqQyRvRERiugodbnkcg&s' },
    { id: 71, name: 'Juice', price: 50, image: 'https://media.istockphoto.com/id/158268808/photo/fresh-citrus-juices.jpg?s=612x612&w=0&k=20&c=vflsrO3KXXtWfpOOzNZdBVgeIpLy21-OSUl-QPSgPmU=' },
    { id: 72, name: 'Smoothie', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_GiMv4yxcnCm-wK737HUPEIMzTSKCg3i_MZwCW0C7j_HzLfj4HcvRgdVF-OHoorAC-U&usqp=CAU' },
    { id: 73, name: 'Ice Tea', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXcR_A-aUNrDpVy93Y77zQE3u8aNz1_23mg&s' },
    { id: 74, name: 'Hot Chocolate', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4666TUr0E4Q3dSzvuQwZAo-i9BLtVNdW9w&s' },
    { id: 75, name: 'Energy Bar', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3H1p_BrYfeRKy5GJ0pn2g7ECtHt5VYFpBA&s' },
    { id: 76, name: 'Candy', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RIuG1cxbLbMwCulWXgRxtNy1yYSeOs6Yew&s' },
    { id: 77, name: 'Popcorn', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaa_O9DD8SnwDl6vYMYv5ONrNadTz4NNPXQ&s' },
    { id: 78, name: 'Pretzels', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MFLrGxbCf1uzAh5QflArRtS1wpw8OT2nrw&s' },
    { id: 79, name: 'Granola', price: 300, image: 'https://thumbs.dreamstime.com/b/granola-cereals-spoon-22252915.jpg' },
    { id: 80, name: 'Soy Milk', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2iO7_fzRyV9HLmxQnZOplRHOCcowuQgEGw&s' },
    { id: 81, name: 'Coconut Water', price: 100, image: 'https://assets.clevelandclinic.org/transform/7ae3470c-6ca1-4064-81c8-7117c5fff9d3/CoconutWater-637330250-770x533-1_jpg' },
    { id: 82, name: 'Pomegranate Juice', price: 130, image: 'https://4.imimg.com/data4/MU/KQ/MY-85258/pomagranate-juice-500x500.jpg' },
    { id: 83, name: 'Chips', price: 50, image: 'https://media.istockphoto.com/id/1383475280/photo/potato-chips-in-bowl-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=yy9vNbgkkipTiB1JdlXM1LELFKK-R3BSXCtuB9kNgis=' },
    { id: 84, name: 'Pickles', price: 120, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe.jpg' },
    { id: 85, name: 'Herbal Tea', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMP4h5oxUoNugt2EsEdfCVgdCF7oGAKDejQ&s' },
    { id: 86, name: 'Veg Soup', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkpblc_6ltN0Lryw3LRDRGbwTAlbYfSv8gA&s' },
    { id: 87, name: 'Instant Noodles', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqjidnSsp4T72aiCbklKci8WFhJoYXCCBHw&s' },
    { id: 88, name: 'Pita Bread', price: 80, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/07/pita-bread-4-500x500.jpg' },
    { id: 89, name: 'Greek Yogurt', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi63lGyCgXioSZ_uqotZp0EGkbajWW3f89Yg&s' },
    { id: 90, name: 'Bagels', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvjq1t7hfv_ao_zhWDYsMeMg6XAhpJYPJCg&s' },
    { id: 91, name: 'Bathua', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlixbV1sZTeTUkYQf5GtQG-5hPAE-00qXmWA&s' },
    { id: 92, name: 'Spinach', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PUh1lt6r6qvtO46ZKhwXxvlSmjMNVkrsFg&s' },
    { id: 93, name: 'Beetroot', price: 40, image: 'https://seed2plant.in/cdn/shop/products/beetrootseeds.jpg?v=1606739694&width=1500' },
    { id: 94, name: 'Asparagus', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_q8HXkhu_MgRnzO7mqE9M7jKQobnpss0yA&s' },
    { id: 95, name: 'Zucchini', price: 150, image: 'https://media.istockphoto.com/id/94929472/photo/two-fresh-zucchini-isolated.jpg?s=612x612&w=0&k=20&c=Vj9XjBjqjUZkA_HKT7Z5zv_eFliepZ3t7j0V3iNptlk=' },
    { id: 96, name: 'Brinjal', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1shzzxfs_wiV7QilYT3OZaDvLJzdYPe0aA&s' },
    { id: 97, name: 'Kale', price: 40, image: 'https://m.media-amazon.com/images/I/711CCK2JRmL.jpg' },
    { id: 98, name: 'Celery', price: 130, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2jPzj1Skp_UcDqBmObVjEQGiJ5hLRF5q6Q&s' },
    { id: 99, name: 'Brussels Sprouts', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fOVNWU_mayRjqgEwA3cXAjUd4FiGwyASOw&s' },
    { id: 100, name: 'Cornflakes', price: 300, image: 'https://www.shreemithai.com/cdn/shop/products/masala-corn-flakes-640246.jpg?v=1707819995&width=1200' }
    ];

    let cart = [];
    let totalAmount = 0;

    const productList = document.getElementById('productList');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const cartSection = document.getElementById('cartSection');
    const productListSection = document.getElementById('productListSection');
    const checkoutSection = document.getElementById('checkoutSection');
    const checkoutTotal = document.createElement('p');
    const searchInput = document.getElementById('searchInput');

    checkoutTotal.id = "checkoutTotal";
    checkoutSection.appendChild(checkoutTotal);

    // Display Products
    function displayProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }
   // Add to Cart
window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    showPopup(`${product.name} has been added to your cart!`);
};

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.classList.remove('hidden');
    setTimeout(hidePopup, 3000); // Automatically hide after 3 seconds
}
// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}
// Update Cart function (also save to localStorage)
function updateCart() {
    cartItems.innerHTML = '';
    totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <button onclick="increaseQuantity(${item.id})">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = totalAmount.toFixed(2);
    saveCartToLocalStorage(); // Save the cart to localStorage after updating
}

// Cart Button Click - Redirect to Cart Page
// Show the Cart Section
document.getElementById('cartBtn').addEventListener('click', () => {
    // Hide other sections
    productListSection.style.display = 'none';
    checkoutSection.style.display = 'none';
    
    // Show cart section
    cartSection.style.display = 'block';
    
    // Update the cart view
    updateCart();
});

// Increase Quantity
window.increaseQuantity = function (productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
        updateCart();
    }
};

// Decrease Quantity
window.decreaseQuantity = function (productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity--;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
};

// Remove from Cart
window.removeFromCart = function (productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};
  // Show Checkout Total
    function updateCheckoutTotal() {
        checkoutTotal.textContent = `Total Amount to Pay: $${totalAmount.toFixed(2)}`;
    }

    // Navigation
    document.getElementById('productsBtn').addEventListener('click', () => {
        productListSection.style.display = 'block';
        cartSection.style.display = 'none';
        checkoutSection.style.display = 'none';
        displayProducts(products);
    });

    document.getElementById('cartBtn').addEventListener('click', () => {
        productListSection.style.display = 'none';
        cartSection.style.display = 'block';
        checkoutSection.style.display = 'none';
    });
//checkout button
document.getElementById('checkoutBtn').addEventListener('click', () => {
    // Hide other sections
    document.getElementById('productListSection').style.display = 'none';
    document.getElementById('cartSection').style.display = 'none';

    // Show the checkout section
    document.getElementById('checkoutSection').style.display = 'block';

    // Display cart items and total
    updateCheckoutSection();
});

function updateCheckoutSection() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    checkoutItems.innerHTML = ''; // Clear the list before updating
    let totalAmount = 0;

    // Loop through the cart items and display them in the checkout section
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}`;
        checkoutItems.appendChild(li);
        totalAmount += item.price * item.quantity;
    });

    // Show the total amount in the checkout section
    checkoutTotal.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
}
// Proceed to Payment function: Show payment method options
function proceedToPayment() {
    // Hide the checkout section content
    document.getElementById('checkoutSection').style.display = 'none';

    // Show the payment methods section
    document.getElementById('paymentMethodsSection').style.display = 'block';
}

// Show payment form for the selected method
function showPaymentForm(method) {
    // Hide both forms initially
    document.getElementById('creditCardForm').style.display = 'none';
    document.getElementById('paypalForm').style.display = 'none';

    // Show the appropriate form based on the method
    if (method === 'creditCard') {
        document.getElementById('creditCardForm').style.display = 'block';
    } else if (method === 'paypal') {
        document.getElementById('paypalForm').style.display = 'block';
    }
}

// Add event listeners for payment form submissions (you can add actual payment logic here)
document.getElementById('creditCardPaymentForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Credit Card Payment Successful!');
    // Add payment logic here
});

document.getElementById('paypalPaymentForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('PayPal Payment Successful!');
    // Add payment logic here
});

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });

    // Initialize Product Display
    displayProducts(products);
});
