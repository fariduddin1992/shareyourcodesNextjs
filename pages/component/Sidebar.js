import Head from 'next/head'
import Link from 'next/link'


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <h1>Farid uddin</h1>
        <p>Coding Made Simple</p>
        <nav id="main-nav">
            <ul class="main-navigation list-group">
              <li list-group-item><Link href="https://codewithmosh.com/courses" target="_blank">Courses</Link></li>
              <li><Link href="/">Tutorials</Link></li>
              <li><Link href="https://www.youtube.com/user/programmingwithmosh" target="_blank">YouTube</Link></li>
              <li><Link href="/about" target="_blank">About me</Link></li>
              <li><Link href="/contact-me">Contact me</Link></li>
            </ul>
        </nav>
      </div>
    
</div>
  )
}
