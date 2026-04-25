import React, { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5';
import { HiPlus } from 'react-icons/hi';

function Card({ song, playSong, isLiked, toggleLike, playlists, addToPlaylist, addArtist, isTopResult }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`card ${isTopResult ? 'card--top-result' : ''}`} onClick={isTopResult ? null : playSong}>
      <div className="card__img-wrapper">
        <img src={song.thumbnail} alt="" className={`card__img ${isTopResult ? 'card__img--rounded' : ''}`} />
        {!isTopResult && (
          <button className="card__play-btn">
            <BsFillPlayFill />
          </button>
        )}
        <div className="card-actions-overlay" style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 8, opacity: 0, transition: 'opacity 0.2s' }}>
          {!isTopResult && (
            <>
              <button onClick={(e) => { e.stopPropagation(); toggleLike(); }} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLiked ? '#1db954' : '#fff' }}>
                {isLiked ? <IoHeartSharp size={18} /> : <IoHeartOutline size={18} />}
              </button>
              <div style={{ position: 'relative' }}>
                <button onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <HiPlus size={18} />
                </button>
                {showMenu && (
                  <div style={{ position: 'absolute', top: '100%', right: 0, background: '#282828', padding: 8, borderRadius: 4, zIndex: 10, minWidth: 160 }}>
                    <div style={{ fontSize: 11, color: '#b3b3b3', padding: '4px 4px 6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Add to</div>
                    {playlists.length === 0 && <div style={{ fontSize: 12, color: '#b3b3b3', padding: 4 }}>No playlists</div>}
                    {playlists.map((pl, idx) => (
                      <div key={idx} onClick={(e) => { e.stopPropagation(); addToPlaylist(idx, song); setShowMenu(false); }} style={{ padding: '6px 4px', fontSize: 14, color: '#fff', cursor: 'pointer', borderRadius: 2 }}
                        onMouseEnter={e => e.currentTarget.style.background = '#3e3e3e'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        {pl.name}
                      </div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />
                    <div onClick={(e) => { e.stopPropagation(); addArtist(); setShowMenu(false); }} style={{ padding: '6px 4px', fontSize: 14, color: '#fff', cursor: 'pointer', borderRadius: 2 }}
                      onMouseEnter={e => e.currentTarget.style.background = '#3e3e3e'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      Follow Artist
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="card__title" style={isTopResult ? { fontSize: 32, fontWeight: 900 } : {}}>{isTopResult ? song.channel : song.title}</div>
      <div className="card__description" style={isTopResult ? { display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 } : {}}>
        {isTopResult ? (
          <span style={{ background: 'rgba(0,0,0,0.5)', padding: '4px 12px', borderRadius: 20, color: '#fff' }}>Artist</span>
        ) : song.channel}
      </div>
      {isTopResult && (
        <button onClick={(e) => { e.stopPropagation(); addArtist(); }} style={{ marginTop: 'auto', alignSelf: 'center', padding: '8px 24px', background: '#fff', color: '#000', borderRadius: 20, fontWeight: 'bold', fontSize: 14 }}>
          Follow
        </button>
      )}
      <style>{`.card:hover .card-actions-overlay { opacity: 1 !important; }`}</style>
    </div>
  );
}

export default Card;