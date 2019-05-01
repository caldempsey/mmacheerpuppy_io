defmodule MmacheerpuppyIoApiWeb.HostDetailsController do
  use MmacheerpuppyIoApiWeb, :controller

  @spec index(Plug.Conn.t(), any()) :: Plug.Conn.t()
  def index(conn, _params) do
    render(conn, "index.json", %{
      data: %{
        ip: to_string(:inet.ntoa(conn.remote_ip))
      }
    })
  end
end
