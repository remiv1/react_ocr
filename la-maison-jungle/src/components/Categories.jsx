import '../styles/categories.css'
import PropTypes from 'prop-types';

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button className='btn' onClick={() => setActiveCategory('')}>
                Réinitialiser
            </button>
        </div>
    )
}

Categories.PropTypes = {
    categories: [],
    setActiveCategory: () => {},
    activeCategory: '',
    map: () => {}
}

export default Categories