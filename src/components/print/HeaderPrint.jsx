import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const HeaderPrint = () => {
  return (
    <div><div className='header'>
      <div className='header--info'>
        <h2>Bộ ý tế</h2>
        <h2>Bệnh viện Hữu Nghị Việt Đức</h2>
        <p >Điện thoại: 0328 290 432</p>
      </div>
      <Logo />
    </div></div>
  )
}

export default HeaderPrint