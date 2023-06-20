import kind from '@enact/core/kind';
import css from './Menu.module.less';
import catholicTvLogo from '../../assets/ctv-logo.png'

const menuItems = [
  {
    text: 'Watch Live',
    path: '',
  },
  {
    text: 'Home',
    path: '',
  },
  {
    text: 'Shows',
    path: '',
  },
  {
    text: 'Search',
    path: '',
  },
  {
    text: 'Donate',
    path: '',
  },
]

const MenuBase = kind({
	name: 'Menu',
	render: () => (
		<div className={ css.menu }>
			<img className={ css.logo } src={catholicTvLogo} alt="CatholicTV Logo" />
      <ul className={ css.menuList }>
        {
          menuItems.map(item => (
            <li className={ css.listItem } key={item.text}>{ item.text }</li>
          ))
        }
      </ul>
		</div>
	)
});

export default MenuBase;
export {MenuBase as Menu};