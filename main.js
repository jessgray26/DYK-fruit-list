        function myFunction() {
            var text;
            var fruits = document.getElementById("myInput").value;

        switch(fruits) {
            case "Bananas":
            text = "<ul><li>A strawberry is not an actual berry, but a banana is.</li><li>Bananas have a natural antacid effect in the body, so if you suffer from heartburn, try eating a banana for soothing relief.</li><li>Because bananas are easy to digest and are very nutritious they are the first fruit offered to babies.</li><li>A banana ripens quickly (overnight), when you put it into a brown paper bag with an apple or tomato.</li><li>Bananas are allergic for some people. These allergies are oral and latex.</li></ul><br><img src='http://www.gheir.com/big/banana2-21-2-2016.jpg'>";
        break;
            case "Oranges":
            text = "<ul><li>Oranges contain antioxidants that help fight the free radicals that damage and age our skin.</li><li>The juiciest, most delicious oranges in the world are grown in Florida.</li><li>An orange’s vitamin C content helps fight back assaults from viruses and germs, cold and fatigue.</li><li>Orange fruits help keep your eyes healthy.</li></ul><br><img src='http://zalliesfreshkitchen.com/wp-content/uploads/2016/06/Oranges.jpg'>";
        break;
            case "Apples":
            text = "<ul><li>Apples float in water because they are 25% air.</li><li>An apple tree can produce up to 400 apples a year.</li><li>There are over 7000 different types of apples grown all over the world.</li><li>An apple is a very refreshing tonic for oily skin. It makes an excellent remedy for fine wrinkles, cracked skin, itching and inflammation.</li><li>Eating an apple is a more reliable method of staying awake than consuming a cup of coffee. The natural sugar in an apple is more potent than the caffeine in coffee.</li></ul><br><img src='https://img-s2.onedio.com/id-57399ee775c4e9a0298fc931/rev-0/w-500/s-f46fa4ff7fb054f36e4e5e888460baf9c37d927c.jpg'>";     
        break;
            case "Pineapples":
            text = "<ul><li>Pineapple fruit is native to the Asian tropics, with a delicate and fresh fragrance.</li><li>You can speed up the ripening of a pineapple by standing it upside down (on the leafy end).</li><li>The name pine-apple was the original name for a pine cone (grows on pine trees). Because the fruit pineapple looked like a huge pine cone, it too was called a pine-apple.</li><li>Pineapples contain an enzyme that is used in blood tests. Fibers in pineapple leaves are used to make rope and a cloth called pino.</li><li>Pineapples are berries, just like strawberries and blueberries.</li></ul><br><img src='https://i0.wp.com/lovingfruits.com/wp-content/uploads/2016/09/is-pineapple-a-vegetable.jpg'>";
         break;
            case "Strawberries":
            text = "<ul><li>An average strawberry has around 200 seeds.</li><li>Strawberries are the only fruit which grows seeds on the outside.</li><li>A strawberry is not an actual berry, but a banana is.</li></ul><br><img src='https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg'>";    
        break;
            case "Mangos":
            text = "<ul><li>Mangos are one of the most popular fruit in the World.</li><li>Orangutans love mangoes.</li><li>Mangos were first grown in India over 5,000 years ago.</li><li>Mango seeds traveled with humans from Asia to the Middle East, East Africa and South America beginning around 300 or 400 A.D.</li></ul><br><img src='https://www.malibubeachrecoverycenter.com/dev/wp-content/uploads/2012/10/mango.jpg'>";  
        break;
            case "Grapes":
            text = "<ul><li>Unlike bananas grapes can no longer ripen once picked.</li><li>Grapes are the fruit of a woody grape vine. About 71% of grapes are used for wine. 27% are used as fresh fruit, and 2% are used as dried fruit.</li><li>Raisins are dried grapes. They contain a lot of sugar.</li><li>There are more than 8,000 grape varieties from about 60 species. The main types are American and European.</li></ul><br><img src='http://24indianews.com/imagedata/2017/01/buah-anggur.jpg'>";  
        break;
            case "Watermelons":
            text = "<ul><li>A watermelon contains 92% water. About six percent of a watermelon is sugar. Many people like to eat watermelon in the summer because the fruit is cool and refreshing.</li><li>Many years ago explorers used watermelons to carry water on long expeditions</li><li>Watermelon is an ideal health food because it doesn’t contain any fat or cholesterol, is high in fiber and vitamins A & C and is a good source of potassium.</li><li>Every part of a watermelon is edible, even the seeds and rinds.</li><li>Watermelon is a vegetable! It is related to cucumbers, pumpkins and squash. (shhh, we'll still keep it on this list)</li></ul><br><img src='http://www.frutastalen.com/images/design-illustrations/3_big.jpg'>";      
        break;
            case "Lemons":
            text = "<ul><li>Lemons can kill bacteria-as they have high content of acid which makes them suitable for cleaning.</li><li>Lemons are native to Asia.</li><li>Lemons trees can produce up to 600lbs of lemons every year.</li><li>Lemons are rich in vitamin C.</li><li>Lemons are a hybrid between a sour orange and a citron.</li></ul><br><img src='https://www.organicfacts.net/wp-content/uploads/2013/05/Lemon3-1020x765.jpg'>";  
        break;
            case "Pears":
            text = "<ul><li>Asian pears were cultivated in China as early as 1134 B.C.</li><li>You can make furniture with Pear wood (its hard).</li><li>There are over 3000 varieties of pears grown around the world.</li><li>Most pears (about 95%) sold in the U.S. are grown on the west coast, in Washington, Oregon, and Northern California.</li></ul><br><img src='http://www.zipheal.com/wp-content/uploads/2013/04/benefits_of_pears.jpg'>";  
        break;
            case "Kiwi":
            text = "<ul><li>Kiwis were once known as Chinese gooseberries.</li><li>Kiwis are fairly large and plump with thin ''fuzzy'' brown skin.</li><li>Kiwi contains twice as much Vitamin C as an orange.</li><li>Kiwis are a great source of fiber. This prevents constipation and other intestinal problems.</li></ul><br><img src='https://www.giardinaggio.org/frutti/frutti-minori/raccolta-kiwi_NG1.jpg'>";  
        break;
            default:
            text = "<center><b><p style='color:red;'>Please input one of the fruits listed above.</p></b></center>";
    }
            
    document.getElementById("info").innerHTML = text;
}          
