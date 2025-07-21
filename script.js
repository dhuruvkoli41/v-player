  const items = document.querySelectorAll('.itm');
        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('expanded'));
                item.classList.add('expanded');
            });

            item.addEventListener('dblclick', () => {
                items.forEach(i => i.classList.remove('expanded'));
                item.classlist.remove('expanded');
            })
        });

        function changebarsize(newheight) {
            const bar = document.getElementById('bar');
            bar.style.height = newheight + 'px';
        }