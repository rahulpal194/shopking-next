import categories from '@/json/menu_categories.json'
import Link from 'next/link'

export default function Categoryomponent(){
    return (

    <ul className="paper-content category-list shadow-category">
      {categories.map((category, index) => (
        category.children ? (
          <li key={`cat-${index}`} className="category-item">
            <button className="category-menu">
              <span className="text-sm font-medium capitalize">{category.title}</span>
              <i className="icon-chevron-right"></i>
            </button>
            <ul className="category-nest shadow-category">
              {category.children.map((child, childIndex) => (
                child.children ? (
                  <li key={`child-${index}-${childIndex}`} className="category-item">
                    <button className="category-menu">
                      <span className="text-sm font-medium capitalize">{child.title}</span>
                      <i className="icon-chevron-right"></i>
                    </button>
                    <ul className="category-nest">
                      {child.children.map((subChild, subIndex) => (
                        <li key={`sub-${index}-${childIndex}-${subIndex}`} className="category-item">
                          <Link href={subChild.route} className="category-menu">
                            <span className="text-sm font-medium capitalize">{subChild.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={`child-${index}-${childIndex}`} className="category-item">
                    <Link href={child.route} className="category-menu">
                      <span className="text-sm font-medium capitalize">{child.title}</span>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </li>
        ) : (
          <li key={`cat-${index}`} className="category-item">
            <Link href={category.route} className="category-menu">
              <span className="text-sm font-medium capitalize">{category.title}</span>
            </Link>
          </li>
        )
      ))}
    </ul>

    )
}