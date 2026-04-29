
        function filterGadgets() {
            const input = document.getElementById('gadget-search').value.toLowerCase();
            const items = document.getElementsByClassName('product-item');

            for (let i = 0; i < items.length; i++) {
                
                const productName = items[i].getElementsByTagName('b')[0].innerText.toLowerCase();
                
                if (productName.includes(input)) {
                    items[i].style.display = ""; 
                } else {
                    items[i].style.display = "none";
                }
            }
        }

        document.getElementById('gadget-search').addEventListener('keyup', filterGadgets);
