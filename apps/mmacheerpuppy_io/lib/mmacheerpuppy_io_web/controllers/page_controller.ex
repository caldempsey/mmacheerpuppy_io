defmodule MmacheerpuppyIoWeb.PageController do
  use MmacheerpuppyIoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
