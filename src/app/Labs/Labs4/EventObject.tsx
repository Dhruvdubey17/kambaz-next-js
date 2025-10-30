import React, { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState<Record<string, unknown> | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const evt = {
      type: e.type,
      target: (e.target as HTMLElement)?.outerHTML ?? null,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      shiftKey: e.shiftKey,
      clientX: e.clientX,
      clientY: e.clientY,
    };
    setEvent(evt);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
