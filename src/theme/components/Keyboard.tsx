export const Keyboard = (
  <div>
    <div className="[&_kbd]:kbd-sm sm:[&_kbd]:kbd-md">
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className="kbd ">q</kbd>
        <kbd className="kbd">w</kbd>
        <kbd className="kbd">e</kbd>
        <kbd className="kbd">r</kbd>
        <kbd className="kbd">t</kbd>
        <kbd className="kbd">y</kbd>
        <kbd className="kbd">u</kbd>
        <kbd className="kbd">i</kbd>
        <kbd className="kbd">o</kbd>
        <kbd className="kbd">p</kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className="kbd">a</kbd>
        <kbd className="kbd">s</kbd>
        <kbd className="kbd">d</kbd>
        <kbd className="kbd">f</kbd>
        <kbd className="kbd">g</kbd>
        <kbd className="kbd">h</kbd>
        <kbd className="kbd">j</kbd>
        <kbd className="kbd">k</kbd>
        <kbd className="kbd">l</kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className="kbd">z</kbd>
        <kbd className="kbd">x</kbd>
        <kbd className="kbd">c</kbd>
        <kbd className="kbd">v</kbd>
        <kbd className="kbd">b</kbd>
        <kbd className="kbd">n</kbd>
        <kbd className="kbd">m</kbd>
        <kbd className="kbd">/</kbd>
      </div>
    </div>
    <div className="flex flex-row justify-evenly items-center mt-5">
      <div>
        <kbd className="kbd">⌘</kbd>
        <kbd className="kbd">⌥</kbd>
        <kbd className="kbd">⇧</kbd>
        <kbd className="kbd">⌃</kbd>
      </div>
      <div>
        <div className="flex justify-center w-full">
          <kbd className="kbd">▲</kbd>
        </div>
        <div className="flex justify-center gap-7 w-full">
          <kbd className="kbd">◀︎</kbd>
          <kbd className="kbd">▶︎</kbd>
        </div>
        <div className="flex justify-center w-full">
          <kbd className="kbd">▼</kbd>
        </div>
      </div>
    </div>
  </div>
);
