const container = document.querySelector('.container');
const addBtn = document.querySelector('.add-card');
const TITLES = ['Heading one', 'Hello', 'Spring', '123']
const DESCRIPTIONS = ['Test', 'i hate javascript', '<3'];
const LS_KEY = 'cards';
addBtn.addEventListener('click', () => {
    container.append(createCard({ shouldSave: true }))
});
function loadData() {
    const data = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    data.forEach((item) => {
        const card = createCard(item);
        container.append(card);
    })
}
loadData()
function getRandomFromArray(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]
}
function createCard(params = {}) {
    const { title, description, shouldSave = false } = params;
    const el = document.createElement('div');
    el.classlist.add
    const h1 = document.createElement('h1');
    h1.textContent = title || getRandomFromArray(TITLES);
    const p = document.createElement('p');
    p.textContent = description || getRandomFromArray(DESCRIPTIONS);
    if (shouldSave) {
        const oldData = JSON.parse(localStorage.getItem(LS_KEY)) || [];
        oldData.push({ title: h1.textContent, description: p.textContent })
        localStorage.setItem(LS_KEY, JSON.stringify(
            oldData
        ))
    }
    el.append(h1, p);
    return el;
}    

// Знаете, что самое страшное в семье пуговиц? Батю пришили.